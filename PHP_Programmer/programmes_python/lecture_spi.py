# ============================================================ #
#       Filename : lecture_spi.py
#       Date : 22/12/2016
#       File Version : 2.0
#       Written by : JorisP30
#       Function : Lecture des donnees de la memoire flash dans l'Atmega
# ============================================================ #


# == Importation des modules ==
import spidev # Pour l'utilisation du spi import
import RPi.GPIO as gpio # Pour utiliser les E/S
import time     # Pour les tempos
import sys	# Pour les arguments
import fctn_programmer # Fonctions
# ============================


#for i in range(1 , 6):
#	print(sys.argv[i])	# Affichage des Arguments


#Arguments : data_mem_flash.txt mem



mem = int( sys.argv[2] )
print (type(mem))
print(sys.argv[0])
print(sys.argv[1])
print(sys.argv[2])
#PRG_H = sys.argv[2]
#PRG_L = sys.argv[3]
#RPM_H = sys.argv[4]
#RPM_L = sys.argv[5]



# == INITIALISATION SPI GPIO ==
spi=spidev.SpiDev() # Creation de l'objet SPi
spi.open(0,0)   # Ouverture des pins
spi.max_speed_hz = 50000
# ============================

# == Constantes ==
pin_reset = 12  # Pin RAZ atmega
#mem = 8192  #Memoire flash = 8 kWords = 8192
masque = 0b1111111100000000 # = 65280
pause = 0.1
PRG_H = 0xAC
PRG_L = 0x53
RPM_H = 0x28
RPM_L = 0x20
recup_mem_flash = sys.argv[1]  # "data_mem_flash.txt"
# ================

fctn_programmer.off_on_rst(pin_reset) # 
print("Attente suite")
#input()
time.sleep(1)
fctn_programmer.prgm_enable(PRG_H , PRG_L)
print("Attente suite")
#input()
time.sleep(1)

fichier = open(recup_mem_flash , "w")

for i in range(0 , mem):
	adr_MSBy = i & masque    	# Recupere @Pfort sur 16 bits
        adr_MSBy  = adr_MSBy >> 8  	# Decalage pour @PFort sur 8 bits
        adr_LSBy = i & 255       	# Masque pour @PFaible sur 8 bits
	print("@ : %s %s " % (hex( adr_MSBy) ,hex( adr_LSBy) ))
	data_LSBy = fctn_programmer.read_prg_mem_LB(RPM_L , adr_MSBy , adr_LSBy)
	data_MSBy = fctn_programmer.read_prg_mem_HB(RPM_H , adr_MSBy , adr_LSBy)
#	int(data_LSBy, 16 )
#	int(data_MSBy,16)
#	print(data_LSBy[1] , data_MSBy)
	fichier.write(" %s %s : %s %s \n" %(hex(adr_MSBy) ,hex(adr_LSBy) ,hex( data_MSBy[0]) ,hex( data_LSBy[0])) ) # Fichier de la memoire flash

spi.close()
fichier.close()
print("Lecture mem flash Done.")
