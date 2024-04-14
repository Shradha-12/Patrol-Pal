const Marketplaces= [
    {
        name: "Google Maps Platform",
        description: "A comprehensive set of APIs for adding maps, directions, and location data to your applications.",
        imageLink: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fblog.searce.com%2Fchanges-to-the-google-maps-plans-and-prices-9dd7b78fd054&psig=AOvVaw37w3DsBj0tdrrvtccsViJG&ust=1712896991692000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOjA_OCsuYUDFQAAAAAdAAAAABAE",
        type: "web", // Assuming a custom enum for platform support
        isGov: false,
        isPaid: true,
        rating: 4.8
    },
    {
        name: "Apple Maps Connect",
        description: "Manage your business listing on Apple Maps and reach millions of iPhone users.",
        imageLink: "https://www.the-sun.com/wp-content/uploads/sites/6/2023/02/apple-maps-001.jpg",
        type: "web",
        isGov: false,
        isPaid: false, // Can be adjusted if there are paid plans
        rating: 4.5
    },
    {
        name: "Twilio",
        description: "Programmable communication APIs for SMS, voice, video, and authentication.",
        imageLink: "https://intuji.com/_next/image/?url=https%3A%2F%2Fcdn.intuji.com%2F2022%2F05%2FWhat-Is-Twilio-scaled-1.jpg&w=3840&q=75",
        type: "iphone",
        isGov: false,
        isPaid: true,
        rating: 4.7
    },
    {
        name: "National Weather Service API",
        description: "Access real-time and forecast weather data from the US National Weather Service.",
        imageLink: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FNational_Weather_Service&psig=AOvVaw0wuvZRltJiwMh48HKIMDzB&ust=1712897109182000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCICWy5CtuYUDFQAAAAAdAAAAABAE",
        type: "iphone",
        isGov: true,
        isPaid: false,
        rating: 4.2
    },
    {
        name: "Stripe",
        description: "A comprehensive payment processing platform for accepting online payments.",
        imageLink: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fkinsta.com%2Fblog%2Fstripe-for-wordpress%2F&psig=AOvVaw297EYyMXU3Fl-Q1_oX7TML&ust=1712897134088000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNjf-pqtuYUDFQAAAAAdAAAAABAE",
        type: "android",
        isGov: false,
        isPaid: true,
        rating: 4.9
    },
    {
        name: "OpenStreetMap",
        description: "A collaborative project to create and maintain a free and editable map of the world.",
        imageLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Openstreetmap_logo.svg/1200px-Openstreetmap_logo.svg.png",
        type: "web",
        isGov: false,
        isPaid: false,
        rating: 4.3
    },
    {
        name: "Mapbox",
        description: "Cloud-based mapping platform with customization options and location services.",
        imageLink: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fblog.mapbox.com%2Fhello-explorer-the-new-mapbox-logo-28087a9d5bd7&psig=AOvVaw2iIYzp2_a3JP3-a6OlFd65&ust=1712897180326000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPCcnLKtuYUDFQAAAAAdAAAAABAE",
        type: "web",
        isGov: false,
        isPaid: true,
        rating: 4.6
    },
    {
        name: "US Census Bureau API",
        description: "Access demographic and economic data from the US Census Bureau.",
        imageLink: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FUnited_States_Census_Bureau&psig=AOvVaw1uoIPv1_q42AMeeZduv1Jd&ust=1712897220025000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKj7-MOtuYUDFQAAAAAdAAAAABAE",
        type: "web",
        isGov: true,
        isPaid: false,
        rating: 4.1
    },
    {
        name: "SendGrid",
        description: "A cloud-based email delivery platform for sending transactional and marketing emails.",
        imageLink: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3Dsendgrid&psig=AOvVaw161AsGHSAk9la7g2LOh9EP&ust=1712897248809000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMDA39GtuYUDFQAAAAAdAAAAABAE",
        type: "web",
        isGov: false,
        isPaid: true,
        rating: 4.4
    },
];
export default Marketplaces;