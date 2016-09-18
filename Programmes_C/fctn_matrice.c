#include <mega16.h>
#include <stdlib.h>
#include <stdio.h>
#include <delay.h>
#include "fctn_matrice.h"

void all_red() {
    PORTA = 0xFF ;
    PORTD = 0xFF;
}

void all_green() {
    PORTA = 0xFF;
    PORTB = 0xFF;    
}

void all_orange() {
    PORTA = 0xFF;
    PORTB = 0xFF;
    PORTD = 0xFF;
}
                                                                                                                
void scroll_droite(int *motif, int nb_affich) {
    int i = 0, j = 0 , k = 0;
    int x_pos = 0b10000000;    
    for(i = 0 ; i < nb_affich ; i++) {
        for(j = 0 ; j <= k ; j++) { // <= a test !   
            PORTD = motif[k-j];
            PORTA = x_pos;
            delay_ms(10);
            PORTD = 0;
            PORTA = 0;
            x_pos = x_pos >> 1;
        }
        x_pos = 0b10000000;
        k++;        
    }
}

void scroll_gauche(int *motif , int nb_affich) {
         int a ;
         a = nb_affich; 
         a = a / 2;
         motif[0] = 1;        
}