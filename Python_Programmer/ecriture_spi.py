# ============================================================ #
#       Filename : ecriture_spi.py
#       Date : 25/09/2016
#       File Version : 1.04
#       Written by : JorisP30
#       Function : Ecriture des donnees de la memoire flash dans l'Atmega
# ============================================================ #


# == Importation des modules ==
import spidev # Pour l'utilisation du spi import
import RPi.GPIO as gpio # Pour utiliser les E/S
import time     # pour les tempos
import sys
import fctn_programmer # Fonctions
# ============================



#for i in range(1 , 8):
 #       print(sys.argv[i])      # Affichage des Arguments


mem = int( sys.argv[1])
print(type(mem))
nb_mot_page = int( sys.argv[2])
fich_txt = sys.argv[3]

# == INITIALISATION SPI GPIO ==
spi=spidev.SpiDev() # Creation de l'objet SPi
spi.open(0,0)   # Ouverture des pins
spi.max_speed_hz = 50000
# ============================

# == Constantes ==
pin_reset = 12  # Pin RAZ atmega
#mem = 8192  #Memoire flash = 8 kWords = 8192
masque = 0b1111111100000000
pause = 0.1
#fich_txt = "prog.rom"
#nb_mot_page = 64
high = 1
low = 0


PRG_H = 0xAC
PRG_L = 0x53
LPMP_L = 0x40
LPMP_H = 0x48
WPMP = 0x4C
# ================

fctn_programmer.off_on_rst(pin_reset) # 
print("Attente suite")
#input()
time.sleep(1)

fctn_programmer.prgm_enable(PRG_H , PRG_L)
print("Attente suite")
#input()
time.sleep(1)

fctn_programmer.chip_erase(0xAC , 0x80 , 0x00 , 0x00)
print("Attente suite")
#input()
time.sleep(1)

nb_page_complete , reste_page , nb_page_totale = fctn_programmer.recup_infos_fichier(fich_txt , nb_mot_page)
print(nb_page_complete , reste_page , nb_page_totale)
print("Attente suite")
#input()
time.sleep(1)

fctn_programmer.progr_flash(fich_txt , nb_page_complete , reste_page , nb_mot_page , nb_page_totale , LPMP_L , LPMP_H , WPMP)

gpio.output(pin_reset , high)
spi.close()
print("Programmation memoire flash Done.")
