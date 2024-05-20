# Police Performance and Resource Management


---
To run the React app, follow these instructions:

1. Make sure you have Node.js installed on your machine. You can download it from [here](https://nodejs.org/).

2. Clone the GitHub repository of the project:
   ```
   git clone https://github.com/m0hit-kumar/patrol-pal.git
   ```

3. Navigate to the project directory:
   ```
   cd patrol-pal
   ```

4. Install the dependencies using npm:
   ```
   npm install
   ```

5. Once the installation is complete, you can start the development server by running:
   ```
   npm run dev
   ```

6. The React app should now be running locally. You can access it in your web browser at `http://localhost:3000/`.

That's it! You've successfully set up and started the React app using npm. You can now explore the application and its features in your browser.
## Idea Brief

### Features for Real-Time Police Response Dashboard:
- **Interactive Area Map:**
  - Clickable and filterable map for police departments.
  - Visualization of crime rates and details for specific areas.
  - Facilitates coordination among police officers and informs the nearest police office about incidents.
- **ML and OpenCV Image Processing:**
  - AI model for image processing integrated into the dashboard.
  - Upload pictures to retrieve details on individuals with criminal records.
  - Search the database using ML-supported chat for case details based on natural language queries.
- **Incident Reporting and Details:**
  - Real-time incident reporting with location, date, time, and reporting person details.
  - Investigate incidents by accessing details such as case closure status, ongoing cases, and location-specific information.
- **Live Video Feeds and Camera Location:**
  - Locate and access live video feeds from surveillance cameras.
  - Determine the availability of camera coverage for specific areas.
- **Police Officer Availability:**
  - Live status of police officers on duty.
  - Easy assignment of duties directly from the dashboard.
- **Public Complaints Portal:**
  - One-page portal for the public to submit complaints.
  - Automatically captures user location, images, videos, and descriptions.
  - Alerts nearest police officers or stations for rapid response.
- **Existing Database Availability:**
  - Uploading photo of old case file to the portal will automatically made them online for usage.
  - Realtime database.

### Architecture Design
- **Police Database**
- **Machine learning image processing and Chat AI unit**
- **Dashboard ML and AI units connected to database for responses**
- **Search of case using chatbot**
- **Image-based search for criminal**
- **Map-based filter and update on real-time basis**
- **Area-wise camera availability**
- **Live location on police**
- 
![KSP Hackathon - Presentation - Google Chrome 14-04-2024 19_25_24](https://github.com/m0hit-kumar/patrol-pal/assets/97183229/a87019d2-d70e-40f5-a9f0-a000df91d23a)

---

## Relevance
Addressing the pressing need for real-time police response, the solution is relevant for enhancing decision-making, optimizing resource allocation, and fostering community engagement.

## Novelty
Uniquely incorporating interactive maps, ML-driven image processing, and real-time incident reporting, the solution represents a novel and cutting-edge approach in the field of law enforcement technology.

## Feasibility
The solution is feasible, leveraging existing technologies, and modern Geographic Information Systems. It is designed to integrate seamlessly into current law enforcement workflows with minimal disruption.

## Impact
The impact of the solution is profound, contributing to faster response times, improved investigative efficiency, and heightened public safety through advanced technology.

---

## Tech Stack
- **Python:** Used to create API and Machine learning/AI models.
- **React:** Used for making real-time dashboard which will reduce response time and increase efficiency.
- **Flask:** Used to create API that will connect database with frontend.
- **MySQL:** Database used to store data and manage data on the application.

---

## Snapshots of Final Product
- **Dashboard**
- ![localhost_3000_dashboard - Google Chrome 14-04-2024 21_29_19](https://github.com/m0hit-kumar/patrol-pal/assets/97183229/e3b03f79-6180-473b-b113-69ea36c57ba8)
- **Interactive Karnataka Map**
![localhost_3000_dashboard - Google Chrome 14-04-2024 21_29_34](https://github.com/m0hit-kumar/patrol-pal/assets/97183229/20d5ee72-eda7-42f4-aff7-004cb182dfd4)
![OpenStreetMap - Google Chrome 14-04-2024 23_29_08](https://github.com/m0hit-kumar/patrol-pal/assets/97183229/624700a7-9ffe-42f7-9a64-779a3e7be307)
![OpenStreetMap - Google Chrome 14-04-2024 23_28_59](https://github.com/m0hit-kumar/patrol-pal/assets/97183229/87c4e5f2-d2ae-480a-bb2a-531bb017d983)


- **Digitalize Records and Chatbot**
- ![localhost_3000_dashboard - Google Chrome 14-04-2024 21_33_48](https://github.com/m0hit-kumar/patrol-pal/assets/97183229/e1b88579-2f92-4e98-b761-a8ffb24be22a)

- **Online FIR, Complaint List, and Marketplace**
![localhost_3000_dashboard - Google Chrome 14-04-2024 21_34_06](https://github.com/m0hit-kumar/patrol-pal/assets/97183229/c070719c-9af8-429e-b34e-ba67d6e023f6)

![localhost_3000_dashboard - Google Chrome 14-04-2024 21_34_27](https://github.com/m0hit-kumar/patrol-pal/assets/97183229/70b17392-af86-43bf-97fc-c3a0ee9920e6)
![localhost_3000_dashboard - Google Chrome 14-04-2024 21_35_34](https://github.com/m0hit-kumar/patrol-pal/assets/97183229/b6eff75e-b512-4eec-89f1-4f7694cb5f46)
![localhost_3000_dashboard - Google Chrome 14-04-2024 21_35_22](https://github.com/m0hit-kumar/patrol-pal/assets/97183229/d845250d-c0d7-4952-abfe-0eacc607f55b)
![OpenStreetMap - Google Chrome 14-04-2024 23_25_14](https://github.com/m0hit-kumar/patrol-pal/assets/97183229/3d181143-efc2-4fb1-8111-9217406c9d6b)


---

## GitHub Repository
[GitHub Repository Link](https://github.com/Shradha-12/Patrol-Pal)

---

## Demo Video
[Demo Video Link (2 Mins)](https://drive.google.com/drive/folders/1fPV4N28TeX-lwKK9Tf3ismPfU72HCYqH)

---

## Summary
The portal streamlines police department management, automating tasks for enhanced efficiency. Its real-time dashboard displays area hotspots, live complaints, and camera visibility status, aiding timely responses. Information on nearby police posts and patrolling units enables swift issue resolution, improving overall response times. The system integrates ML and AI for chat-based information retrieval on cases and criminal records via images. For offline systems, the portal facilitates a seamless transition by allowing the upload of files, making them accessible in a digital database. It's not limited to internal use— the public section enables efficient complaint submission with updates directly reflected on the map for the incharge officer's attention, fostering community collaboration.
