# ============================================================ #
#       Filename : write_16.py
#       Date : 02/10/2016
#       File Version : 1.05
#       Written by : JorisP30
#       Function : ecriture de la flash dans un Atmega16
# ============================================================ #

# == Importation des modules ==
import spidev 					# Pour l'utilisation du spi import
import RPi.GPIO as gpio 			# Pour l'utilisation des E/S
import time
import sys
import fctn_prog
# ============================

# == Initialisation du SPI , Obligatoire ==
spi = spidev.SpiDev() 				# Creation de l'objet SPi
spi.open(0,0)   				# Ouverture des pins
spi.max_speed_hz = 50000
gpio.setmode(gpio.BOARD)
# =========================================

pin_reset = 12
fctn_prog.off_on_rst(pin_reset)
fctn_prog.prgm_enable()

fich_txt = "test1.rom"
nb_page_complete, reste_page , nb_page_totale, nb_ligne = fctn_prog.recup_infos_fichier(fich_txt , 64)
fctn_prog.prog_flash_16(fich_txt , nb_page_complete , reste_page , nb_page_totale)

spi.close()
