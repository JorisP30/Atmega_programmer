# ============================================================ #
#       Filename : chip_erase.py
#       Date : 25/09/2016
#       File Version : 1.00
#       Written by : JorisP30
#       Function : Effacement de la memoire flash dans l'Atmega
# ============================================================ #

# == Importation des modules ==
import spidev # Pour l'utilisation du spi import
import RPi.GPIO as gpio # Pour utiliser les E/S
import time     # Pour les tempos
import sys	# Pour les arguments
import fctn_programmer # Fonctions
# ============================

# == INITIALISATION SPI GPIO ==
spi=spidev.SpiDev() # Creation de l'objet SPi
spi.open(0,0)   # Ouverture des pins
spi.max_speed_hz = 50000
# ============================

fctn_programmer.chip_erase(0xAC , 0x80 , 0x00 , 0x00)

spi.close()
print("Lecture mem flash Done.")
