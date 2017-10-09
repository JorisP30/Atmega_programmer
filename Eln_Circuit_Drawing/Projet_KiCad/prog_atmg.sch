EESchema Schematic File Version 2
LIBS:power
LIBS:device
LIBS:transistors
LIBS:conn
LIBS:linear
LIBS:regul
LIBS:74xx
LIBS:cmos4000
LIBS:adc-dac
LIBS:memory
LIBS:xilinx
LIBS:microcontrollers
LIBS:dsp
LIBS:microchip
LIBS:analog_switches
LIBS:motorola
LIBS:texas
LIBS:intel
LIBS:audio
LIBS:interface
LIBS:digital-audio
LIBS:philips
LIBS:display
LIBS:cypress
LIBS:siliconi
LIBS:opto
LIBS:atmel
LIBS:contrib
LIBS:valves
LIBS:sup_zif_40
EELAYER 25 0
EELAYER END
$Descr A4 11693 8268
encoding utf-8
Sheet 1 1
Title ""
Date ""
Rev ""
Comp ""
Comment1 ""
Comment2 ""
Comment3 ""
Comment4 ""
$EndDescr
$Comp
L SUPP40 Supp1
U 1 1 59DBB15F
P 5500 3100
F 0 "Supp1" H 5500 4200 50  0000 C CNN
F 1 "SUPP40" H 5500 2000 50  0000 C CNN
F 2 "" H 5500 3100 50  0001 C CNN
F 3 "" H 5500 3100 50  0001 C CNN
	1    5500 3100
	1    0    0    -1  
$EndComp
$Comp
L CONN_01X02 J1
U 1 1 59DBB1E3
P 1250 2000
F 0 "J1" H 1250 2300 50  0000 C CNN
F 1 "CONN_01X02" H 1250 2200 50  0000 C CNN
F 2 "" H 1250 2000 50  0001 C CNN
F 3 "" H 1250 2000 50  0001 C CNN
	1    1250 2000
	-1   0    0    -1  
$EndComp
$Comp
L GND #PWR?
U 1 1 59DBB424
P 1550 2150
F 0 "#PWR?" H 1550 1900 50  0001 C CNN
F 1 "GND" H 1550 2000 50  0000 C CNN
F 2 "" H 1550 2150 50  0001 C CNN
F 3 "" H 1550 2150 50  0001 C CNN
	1    1550 2150
	1    0    0    -1  
$EndComp
Wire Wire Line
	1450 2050 1550 2050
Wire Wire Line
	1550 2050 1550 2150
Text GLabel 1600 1950 2    60   Output ~ 0
+5V
Wire Wire Line
	1450 1950 1600 1950
$Comp
L PWR_FLAG #FLG?
U 1 1 59DBB56D
P 1450 1250
F 0 "#FLG?" H 1450 1325 50  0001 C CNN
F 1 "PWR_FLAG" H 1450 1400 50  0000 C CNN
F 2 "" H 1450 1250 50  0001 C CNN
F 3 "" H 1450 1250 50  0001 C CNN
	1    1450 1250
	1    0    0    -1  
$EndComp
$Comp
L GND #PWR?
U 1 1 59DBB669
P 1450 1350
F 0 "#PWR?" H 1450 1100 50  0001 C CNN
F 1 "GND" H 1450 1200 50  0000 C CNN
F 2 "" H 1450 1350 50  0001 C CNN
F 3 "" H 1450 1350 50  0001 C CNN
	1    1450 1350
	1    0    0    -1  
$EndComp
Wire Wire Line
	1450 1350 1450 1250
$Comp
L CONN_01X04 J2
U 1 1 59DBB711
P 1300 2900
F 0 "J2" H 1300 3300 50  0000 C CNN
F 1 "CONN_01X04" H 1300 3200 50  0000 C CNN
F 2 "" H 1300 2900 50  0001 C CNN
F 3 "" H 1300 2900 50  0001 C CNN
	1    1300 2900
	-1   0    0    -1  
$EndComp
Text GLabel 1600 2750 2    39   Output ~ 0
MOSI
Text GLabel 1600 2850 2    39   Input ~ 0
MOSI
Text GLabel 1600 2950 2    39   Output ~ 0
SCK
Text GLabel 1600 3050 2    39   Output ~ 0
Pin_RESET
Wire Wire Line
	1500 2750 1600 2750
Wire Wire Line
	1500 2850 1600 2850
Wire Wire Line
	1500 2950 1600 2950
Wire Wire Line
	1500 3050 1600 3050
$Comp
L CONN_01X04 J3
U 1 1 59DBC0BA
P 1300 3650
F 0 "J3" H 1300 4050 50  0000 C CNN
F 1 "CONN_01X04" H 1300 3950 50  0000 C CNN
F 2 "" H 1300 3650 50  0001 C CNN
F 3 "" H 1300 3650 50  0001 C CNN
	1    1300 3650
	-1   0    0    -1  
$EndComp
Wire Wire Line
	1500 3800 1650 3800
Wire Wire Line
	1650 3800 1650 3500
Wire Wire Line
	1500 3500 1800 3500
Wire Wire Line
	1500 3600 1650 3600
Connection ~ 1650 3600
Wire Wire Line
	1500 3700 1650 3700
Connection ~ 1650 3700
Text GLabel 1800 3500 2    60   Input ~ 0
+5V
Connection ~ 1650 3500
$Comp
L CONN_01X04 J4
U 1 1 59DBC5A5
P 1300 4450
F 0 "J4" H 1300 4850 50  0000 C CNN
F 1 "CONN_01X04" H 1300 4750 50  0000 C CNN
F 2 "" H 1300 4450 50  0001 C CNN
F 3 "" H 1300 4450 50  0001 C CNN
	1    1300 4450
	-1   0    0    -1  
$EndComp
Wire Wire Line
	1500 4300 1650 4300
Wire Wire Line
	1650 4300 1650 4700
Wire Wire Line
	1650 4600 1500 4600
Wire Wire Line
	1500 4500 1650 4500
Connection ~ 1650 4500
Wire Wire Line
	1500 4400 1650 4400
Connection ~ 1650 4400
$Comp
L GND #PWR?
U 1 1 59DBC9E0
P 1650 4700
F 0 "#PWR?" H 1650 4450 50  0001 C CNN
F 1 "GND" H 1650 4550 50  0000 C CNN
F 2 "" H 1650 4700 50  0001 C CNN
F 3 "" H 1650 4700 50  0001 C CNN
	1    1650 4700
	1    0    0    -1  
$EndComp
Connection ~ 1650 4600
$Comp
L CONN_01X04 J5
U 1 1 59DBCE79
P 3400 2800
F 0 "J5" H 3400 3200 50  0000 C CNN
F 1 "CONN_01X04" H 3400 3100 50  0000 C CNN
F 2 "" H 3400 2800 50  0001 C CNN
F 3 "" H 3400 2800 50  0001 C CNN
	1    3400 2800
	1    0    0    -1  
$EndComp
Text GLabel 2950 2650 0    39   Input ~ 0
MOSI
Text GLabel 2300 2750 0    39   Output ~ 0
MISO
$Comp
L R R1
U 1 1 59DBD0EB
P 2850 2750
F 0 "R1" V 2930 2750 50  0000 C CNN
F 1 "560" V 2850 2750 50  0000 C CNN
F 2 "" V 2780 2750 50  0001 C CNN
F 3 "" H 2850 2750 50  0001 C CNN
	1    2850 2750
	0    1    1    0   
$EndComp
$Comp
L R R2
U 1 1 59DBD510
P 2600 2950
F 0 "R2" H 2700 2950 50  0000 C CNN
F 1 "1000" V 2600 2950 50  0000 C CNN
F 2 "" V 2530 2950 50  0001 C CNN
F 3 "" H 2600 2950 50  0001 C CNN
	1    2600 2950
	-1   0    0    1   
$EndComp
Text GLabel 3150 2850 0    39   Input ~ 0
SCK
Text GLabel 3150 2950 0    39   Input ~ 0
Pin_RESET
$Comp
L GND #PWR?
U 1 1 59DBD866
P 2600 3200
F 0 "#PWR?" H 2600 2950 50  0001 C CNN
F 1 "GND" H 2600 3050 50  0000 C CNN
F 2 "" H 2600 3200 50  0001 C CNN
F 3 "" H 2600 3200 50  0001 C CNN
	1    2600 3200
	1    0    0    -1  
$EndComp
Wire Wire Line
	2600 3100 2600 3200
Wire Wire Line
	2300 2750 2700 2750
Wire Wire Line
	2600 2750 2600 2800
Wire Wire Line
	3000 2750 3200 2750
Wire Wire Line
	3150 2850 3200 2850
Wire Wire Line
	3150 2950 3200 2950
Wire Wire Line
	2950 2650 3200 2650
Connection ~ 2600 2750
$Comp
L CONN_01X20 J7
U 1 1 59DBDD96
P 6500 3100
F 0 "J7" H 6500 4150 50  0000 C CNN
F 1 "CONN_01X20" V 6600 3100 50  0000 C CNN
F 2 "" H 6500 3100 50  0001 C CNN
F 3 "" H 6500 3100 50  0001 C CNN
	1    6500 3100
	1    0    0    -1  
$EndComp
$Comp
L CONN_01X20 J6
U 1 1 59DBE162
P 4500 3100
F 0 "J6" H 4500 4150 50  0000 C CNN
F 1 "CONN_01X20" V 4600 3100 50  0000 C CNN
F 2 "" H 4500 3100 50  0001 C CNN
F 3 "" H 4500 3100 50  0001 C CNN
	1    4500 3100
	-1   0    0    -1  
$EndComp
Wire Wire Line
	4700 2150 4900 2150
Wire Wire Line
	4700 2250 4900 2250
Wire Wire Line
	4700 2350 4900 2350
Wire Wire Line
	4700 2450 4900 2450
Wire Wire Line
	4700 2550 4900 2550
Wire Wire Line
	4700 2650 4900 2650
Wire Wire Line
	4700 2750 4900 2750
Wire Wire Line
	4700 2850 4900 2850
Wire Wire Line
	4700 2950 4900 2950
Wire Wire Line
	4700 3050 4900 3050
Wire Wire Line
	4700 3150 4900 3150
Wire Wire Line
	4900 3250 4700 3250
Wire Wire Line
	4700 3350 4900 3350
Wire Wire Line
	4900 3450 4700 3450
Wire Wire Line
	4700 3550 4900 3550
Wire Wire Line
	4900 3650 4700 3650
Wire Wire Line
	4700 3750 4900 3750
Wire Wire Line
	4900 3850 4700 3850
Wire Wire Line
	4700 3950 4900 3950
Wire Wire Line
	4900 4050 4700 4050
Wire Wire Line
	6100 4050 6300 4050
Wire Wire Line
	6300 3950 6100 3950
Wire Wire Line
	6100 3850 6300 3850
Wire Wire Line
	6300 3750 6100 3750
Wire Wire Line
	6100 3650 6300 3650
Wire Wire Line
	6300 3550 6100 3550
Wire Wire Line
	6300 3450 6100 3450
Wire Wire Line
	6100 3350 6300 3350
Wire Wire Line
	6300 3250 6100 3250
Wire Wire Line
	6100 3150 6300 3150
Wire Wire Line
	6100 3050 6300 3050
Wire Wire Line
	6100 2950 6300 2950
Wire Wire Line
	6300 2850 6100 2850
Wire Wire Line
	6100 2750 6300 2750
Wire Wire Line
	6100 2650 6300 2650
Wire Wire Line
	6300 2550 6100 2550
Wire Wire Line
	6100 2450 6300 2450
Wire Wire Line
	6300 2350 6100 2350
Wire Wire Line
	6100 2250 6300 2250
Wire Wire Line
	6100 2150 6300 2150
$EndSCHEMATC
