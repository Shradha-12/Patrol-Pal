type DistrictData = {
    "Crime Rate": string;
    "Police Stations": string;
    "Pending Cases": string;
};
type MapStatsType = {
    [key: string]: DistrictData;
};
const MapStats: MapStatsType = {
    "Bagalkot": {
        "Crime Rate": "74%",
        "Police Stations": "23%",
        "Pending Cases": "45%"
    },
    "Ballari": {
        "Crime Rate": "32%",
        "Police Stations": "65%",
        "Pending Cases": "88%"
    },
    "Belagavi": {
        "Crime Rate": "56%",
        "Police Stations": "17%",
        "Pending Cases": "93%"
    },
    "Bengaluru Rural": {
        "Crime Rate": "41%",
        "Police Stations": "79%",
        "Pending Cases": "12%"
    },
    "Bengaluru Urban": {
        "Crime Rate": "89%",
        "Police Stations": "34%",
        "Pending Cases": "61%"
    },
    "Bidar": {
        "Crime Rate": "25%",
        "Police Stations": "43%",
        "Pending Cases": "54%"
    },
    "Chamarajanagar": {
        "Crime Rate": "68%",
        "Police Stations": "91%",
        "Pending Cases": "28%"
    },
    "Chikkaballapur": {
        "Crime Rate": "37%",
        "Police Stations": "54%",
        "Pending Cases": "79%"
    },
    "Chikkamagaluru": {
        "Crime Rate": "82%",
        "Police Stations": "15%",
        "Pending Cases": "64%"
    },
    "Chitradurga": {
        "Crime Rate": "46%",
        "Police Stations": "37%",
        "Pending Cases": "83%"
    },
    "Dakshina Kannada": {
        "Crime Rate": "73%",
        "Police Stations": "81%",
        "Pending Cases": "41%"
    },
    "Davanagere": {
        "Crime Rate": "19%",
        "Police Stations": "47%",
        "Pending Cases": "96%"
    },
    "Dharwad": {
        "Crime Rate": "65%",
        "Police Stations": "29%",
        "Pending Cases": "60%"
    },
    "Gadag": {
        "Crime Rate": "48%",
        "Police Stations": "82%",
        "Pending Cases": "26%"
    },
    "Hassan": {
        "Crime Rate": "36%",
        "Police Stations": "23%",
        "Pending Cases": "74%"
    },
    "Haveri": {
        "Crime Rate": "79%",
        "Police Stations": "84%",
        "Pending Cases": "35%"
    },
    "Kalaburagi": {
        "Crime Rate": "8%",
        "Police Stations": "20%",
        "Pending Cases": "89%"
    },
    "Kodagu": {
        "Crime Rate": "27%",
        "Police Stations": "87%",
        "Pending Cases": "37%"
    },
    "Kolar": {
        "Crime Rate": "69%",
        "Police Stations": "53%",
        "Pending Cases": "71%"
    },
    "Koppal": {
        "Crime Rate": "45%",
        "Police Stations": "63%",
        "Pending Cases": "99%"
    },
    "Gulbarga": {
        "Crime Rate": "45%",
        "Police Stations": "63%",
        "Pending Cases": "99%"
    },
    "Bijapur": {
        "Crime Rate": "15%",
        "Police Stations": "33%",
        "Pending Cases": "19%"
    },
    "Mandya": {
        "Crime Rate": "78%",
        "Police Stations": "77%",
        "Pending Cases": "43%"
    },
    "Mysuru": {
        "Crime Rate": "34%",
        "Police Stations": "22%",
        "Pending Cases": "61%"
    },
    "Raichur": {
        "Crime Rate": "90%",
        "Police Stations": "45%",
        "Pending Cases": "31%"
    },
    "Ramanagara": {
        "Crime Rate": "16%",
        "Police Stations": "8%",
        "Pending Cases": "57%"
    },
    "Shivamogga": {
        "Crime Rate": "39%",
        "Police Stations": "88%",
        "Pending Cases": "75%"
    },
    "Tumakuru": {
        "Crime Rate": "87%",
        "Police Stations": "65%",
        "Pending Cases": "94%"
    },
    "Udupi": {
        "Crime Rate": "57%",
        "Police Stations": "32%",
        "Pending Cases": "55%"
    },
    "Uttara Kannada": {
        "Crime Rate": "9%",
        "Police Stations": "82%",
        "Pending Cases": "61%"
    },
    "Vijayapura": {
        "Crime Rate": "62%",
        "Police Stations": "94%",
        "Pending Cases": "35%"
    },
    "Yadgir": {
        "Crime Rate": "40%",
        "Police Stations": "35%",
        "Pending Cases": "73%"
    }
}

export default MapStats