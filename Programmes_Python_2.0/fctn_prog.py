# ============================================================ #
#       Filename : fctn_prog.py
#       Date : 29/05/2017
#       File Version : 1.0
#       Written by : JorisP30
#       Function : fichier contenant les fonctions du programmateur
# ============================================================ #

import spidev
import RPi.GPIO as gpio
import time
import sys
import fctn_prog

spi = spidev.SpiDev()
spi.open(0,0)
spi.max_speed_hz = 50000
gpio.setmode(gpio.BOARD)

def off_on_rst(pin_reset):
	gpio.setup(pin_reset , gpio.OUT)
	gpio.output(pin_reset , 0)
	gpio.output(pin_reset , 1)
	time.sleep(0.5)
	gpio.output(pin_reset , 0)
	time.sleep(0.5)
	print("off_on_rst Done.")

def prgm_enable():
	octet_1 = 0xAC
	octet_2 = 0x53
	spi.writebytes([octet_1 , octet_2])
	octets_retour = spi.readbytes(2)
	time.sleep(0.5)
	if octets_retour[0] == 83:
		print("Synch OK")
	else:
		print("Synch FAILED")
	print("prgm_enable Done.")

def chip_erase():
	octet_1 = 0xAC
	octet_2 = 0x80
	octet_3 = 0
	octet_4 = 0
	spi.writebytes([octet_1 , octet_2 , octet_3 , octet_4])
	print("chip_erase Done.")

def read_prg_mem_HB(adr_MSBy , adr_LSBy):
	octet_1 = 0x28
        spi.writebytes([octet_1 , adr_MSBy , adr_LSBy ])
        data_MSBy = spi.readbytes(1)
        return data_MSBy

def read_prg_mem_LB(adr_MSBy , adr_LSBy):
	octet_1 = 0x20
        spi.writebytes([octet_1 , adr_MSBy , adr_LSBy])
        data_LSBy = spi.readbytes(1)
        return data_LSBy

def read_mem_flash(mem , read_mem_flash):
	masque = 65280
	fichier = open(read_mem_flash , "w")
	for i in range(0 , mem):
		adr_MSBy = i & masque           # Recupere @Pfort sur 16 bits
		adr_MSBy  = adr_MSBy >> 8       # Decalage pour @PFort sur 8 bits
		adr_LSBy = i & 255              # Masque pour @PFaible sur 8 bits
		data_LSBy = fctn_prog.read_prg_mem_LB(adr_MSBy , adr_LSBy)
		data_MSBy = fctn_prog.read_prg_mem_HB(adr_MSBy , adr_LSBy)
		fichier.write(" %s %s : %s %s \n" %(hex(adr_MSBy) ,hex(adr_LSBy) ,hex( data_MSBy[0]) ,hex( data_LSBy[0])) ) # Fichier de la memoire flash
	fichier.close()
	print("read_mem_flash Done.")

def read_eeprom_adr(adr_MSBy , adr_LSBy):
	REPM = 0xA0
	spi.writebytes([REPM , adr_MSBy , adr_LSBy])
	data_eeprom = spi.readbytes(1)
	return data_eeprom

def read_eeprom(mem , read_eeprom):
	masque = 65280
	fichier = open(read_eeprom , "w")
	for i in range(0 , mem):
		adr_MSBy = (i & masque) >> 8
		adr_LSBy = i & 255
		data_eeprom = fctn_prog.read_eeprom_adr(adr_MSBy , adr_LSBy)
		fichier.write(" %s %s : %s \n" %(hex(adr_MSBy) ,hex(adr_LSBy) ,hex(data_eeprom[0])) )   # Fichier de la eeprom
	fichier.close()
	print("read_eeprom Done.")

def write_eeprom_adr(adr_MSBy , adr_LSBy , data):
	WEPM = 0xC0
	spi.writebytes([WEPM , adr_MSBy , adr_LSBy , data])
	time.sleep(0.3)
	print("write_eeprom_adr Done.")

def recup_infos_fichier(fich_txt , nb_mot_page):
	fichier = open(fich_txt , "r")
	nb_ligne = 0
	while fichier.readline():
		nb_ligne += 1

	reste_page = nb_ligne % nb_mot_page
	nb_page_complete = nb_ligne / nb_mot_page
	nb_page_totale = nb_page_complete + 1
	fichier.close()
	print("Recup infos fichier Done.")
	return nb_page_complete , reste_page , nb_page_totale , nb_ligne

def reset_flash(mem , nb_mot_page , nb_page):
	LPMP_L = 0x40
	LPMP_H = 0x48
	WPMP = 0x4C
	data = 0xFF					## Valeur quand on reste la meme flash
	adresse = 0				# 128 pages de 64 mots = 8192
	masque = 0xFF00
	num_page = 0
	for num_page in range(0 , nb_page):
		print(num_page)
		for j in range(0 , nb_mot_page):
			adr_H = (adresse & masque) >> 8
			adr_L = adresse & 255
			spi.writebytes([LPMP_L , adr_H , adr_L , data])
			spi.writebytes([LPMP_H , adr_H , adr_L , data])
			adresse = adresse + 1
		grp_H = num_page >> 2
		grp_L = (num_page & 3) << 6
		spi.writebytes([WPMP , grp_H ,grp_L , 0])
		time.sleep(0.05)
	print("reset_flash Done.")

def lecture_fich_prog(fich_txt):
	fichier = open(fich_txt , "r")
	nb_ligne = 0
	masque = 65280
	while fichier.readline():
		nb_ligne += 1
	fichier.close()
	datas = [[0 for i in range(0 , 2)] for j in range(0 , nb_ligne)]
	fichier = open(fich_txt , "r")
	for i in range(0 , nb_ligne):
		ligne = fichier.readline()
		adr_data = ligne.split(":") # Recupere @ d'un cote et data de l'au$
		adr_l = adr_data[0]
		data_l = adr_data[1]
		adr_l = int(adr_l , 16)
		data_l = data_l.split('\r\n')
		data_l[0] = int(data_l[0], 16)
		data_fort = data_l[0] & masque
		data_fort = data_fort >> 8
		data_faible = data_l[0] & 255
		datas[i][0] = data_fort
		datas[i][1] = data_faible
	fichier.close()
	print("lecture_fich_prog Done.")
	return datas

def prog_flash_16(fich_txt , nb_page_complete , reste_page , nb_page_totale):
	datas = fctn_prog.lecture_fich_prog(fich_txt)
	LPMP_L = 0x40
	LPMP_H = 0x48
	WPMP = 0x4C
	masque = 65280
	nb_mot_page = 64
	adresse = 0
	for num_page in range(0 , nb_page_complete):		# Remplissage des pages complete
		for j in range(0 , nb_mot_page):
			adr_H = (adresse & masque) >> 8
			adr_L = adresse & 255
			spi.writebytes([LPMP_L , adr_H , adr_L , datas[adresse][1] ])
			time.sleep(0.05)
			spi.writebytes([LPMP_H , adr_H , adr_L , datas[adresse][0] ])
			time.sleep(0.05)
			adresse = adresse + 1
		grp_H = num_page >> 2					# Ecriture des groupes
		grp_L = (num_page & 3) << 6
		spi.writebytes([WPMP , grp_H ,grp_L , 0])
		time.sleep(0.05)

	for i in range(0 , reste_page):				# Remplissage de la page incomplete
		adr_H = (adresse & masque) >> 8
		adr_L = adresse & 255
		spi.writebytes([LPMP_L , adr_H , adr_L , datas[adresse][1] ])
		time.sleep(0.05)
		spi.writebytes([LPMP_H , adr_H , adr_L , datas[adresse][0] ])
		time.sleep(0.05)
		adresse = adresse + 1
	grp_H = (nb_page_totale - 1) >> 2			# Ecriture du dernier groupe non complet
	grp_L = (nb_page_totale - 1) << 6
	spi.writebytes([WPMP , grp_H ,grp_L , 0])
	print("prog_flash_16 Done.")
