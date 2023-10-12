def printMOve(fr, to):
    print('move form ' + fr + 'to '+ to)

def Towers(n, fr, to, spare):
    if n==1:
        printMOve(fr, to)
    else:
        Towers(n-1, fr, spare, to)
        Towers(1, fr, to, spare)
        Towers(n-1, spare, to, fr)
        
        
        
Towers(3, 'A', 'C', 'B')