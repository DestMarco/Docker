import requests

def display_menu():
    print("\n--- Menu ---")
    print("1. Visualizza tutti gli aeroporti")
    print("2. Visualizza i voli con durata superiore alla media della compagnia")
    print("3. Visualizza le città servite da più aeroporti per Apitalia")
    print("0. Esci")

def execute_query(query_id):
    url = f"http://127.0.0.1:5002/query/{query_id}"
    try:
        response = requests.get(url)
        if response.status_code == 200:
            results = response.json()
            if results:
                print("\nRisultati:")
                for result in results:
                    print(result)
            else:
                print("\nNessun risultato trovato.")
        else:
            print(f"\nErrore nella richiesta: {response.status_code} - {response.json().get('error')}")
    except requests.exceptions.RequestException as e:
        print(f"\nErrore di connessione al server: {e}")

def main():
    while True:
        display_menu()
        try:
            choice = int(input("\nScegli un'opzione: "))
            if choice == 0:
                print("Uscita dal client. Arrivederci!")
                break
            elif choice in [1, 2, 3]:
                execute_query(choice)
            else:
                print("\nOpzione non valida. Riprova.")
        except ValueError:
            print("\nInserisci un numero valido.")

if __name__ == "__main__":
    main()
