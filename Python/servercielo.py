import psycopg2
from flask import Flask, jsonify

app = Flask(__name__)

# Database configuration
host = "172.21.63.6"
port = "5432"
dbname = "cielo"
user = "postgres"
password = "postgres"

def connect_to_db():
    return psycopg2.connect(
        host=host,
        port=port,
        dbname=dbname,
        user=user,
        password=password
    )

@app.route('/query/<int:query_id>', methods=['GET'])
def run_query(query_id):
    """Execute predefined queries based on the query_id."""
    try:
        connection = connect_to_db()
        cursor = connection.cursor()

        if query_id == 1:
            query = "SELECT * FROM aeroporto"
        elif query_id == 2:
            query = """
                SELECT V.codice, V.comp, V.durataMinuti 
                FROM volo V 
                WHERE V.durataMinuti > (
                    SELECT AVG(v2.durataMinuti) 
                    FROM volo v2 
                    WHERE v2.comp = V.comp
                )
            """
        elif query_id == 3:
            query = """
                SELECT l.citta
                FROM LuogoAeroporto l
                JOIN Aeroporto a ON l.aeroporto = a.codice
                JOIN ArrPart ap ON a.codice = ap.partenza OR a.codice = ap.arrivo
                WHERE ap.comp = 'Apitalia'
                GROUP BY l.citta 
                HAVING COUNT(DISTINCT l.aeroporto) > 1
            """
        else:
            return jsonify({"error": "Invalid query ID"}), 400

        cursor.execute(query)
        rows = cursor.fetchall()

        column_names = [desc[0] for desc in cursor.description]
        results = [dict(zip(column_names, row)) for row in rows]

        return jsonify(results)
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    finally:
        if connection:
            connection.close()

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5002)
