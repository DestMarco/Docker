import psycopg2
import time 

host = "localhost"
port = "5432"
dbname = "cielo"
user = "postgres"
password = "postgres"

try:
    connection = psycopg2.connect(
        host=host, 
        port=port, 
        dbname=dbname, 
        user=user, 
        password=password
    )
    print("Connessione riuscita al database")

    def query_1():
        cursor = connection.cursor()
        cursor.execute("SELECT * FROM aeroporto")
        rows = cursor.fetchall()
        for row in rows:
            print(row)


    def query_2():
        cursor = connection.cursor()
        cursor.execute("""
            SELECT V.codice, V.comp, V.durataMinuti 
            FROM volo V 
            WHERE V.durataMinuti > (
                SELECT AVG(v2.durataMinuti) 
                FROM volo v2 
                WHERE v2.comp = V.comp
            )
        """)
        rows = cursor.fetchall()
        for row in rows:
            print(row)

  
    def query_3():
        cursor = connection.cursor()
        cursor.execute("""
            SELECT l.citta
            FROM LuogoAeroporto l
            JOIN Aeroporto a ON l.aeroporto = a.codice
            JOIN ArrPart ap ON a.codice = ap.partenza OR a.codice = ap.arrivo
            WHERE ap.comp = 'Apitalia'
            GROUP BY l.citta 
            HAVING COUNT(DISTINCT l.aeroporto) > 1
        """)
        rows = cursor.fetchall()
        for row in rows:
            print(row)

    
    
    def query_interactive():
        print("\n--- Modalità Query Personalizzata ---")
        print("Scrivi la tua query SQL (scrivi 'exit' per tornare al menu):")
        while True:
            custom_query = input("SQL> ")
            if custom_query.lower() == 'q':
                print("Uscita dalla modalità interattiva.")
                break
            try:
                cursor = connection.cursor()
                cursor.execute(custom_query)
                rows = cursor.fetchall()
                for row in rows:
                    print(row)
            except Exception as e:
                print(f"Errore nell'esecuzione della query: {e}")

    while True:
        print("\n--- Menu delle Query ---")
        print("1. Visualizza tutti gli aeroporti")
        print("2. Visualizza i voli con durata sopra la media per compagnia")
        print("3. Visualizza le città servite da più di un aeroporto per Apitalia")
        print("4. Scrivi una query personalizzata")
        print("5. Esci")
        
        choice = input("Scegli un'opzione (1-5): ")
        
        if choice == "1":
            query_1()
   
        elif choice == "2":
            query_2()
   
        elif choice == "3":
            query_3()

        elif choice == "4":
            query_interactive()
        elif choice == "5":
            print("Chiusura del programma...")
            break
        else:
            print("Scelta non valida, riprova.")
except Exception as e:
    print(f"Errore durante l'esecuzione del programma: {e}")
finally:

    try:
        if connection:
            connection.close()
            print("Connessione al database chiusa.")
    except Exception as e:
        print(f"Errore durante la chiusura della connessione: {e}")
