# 🌟 LightBulb_Toggle-IoT-Hackathon 🌐  

**LightBulb_Toggle-IoT-Hackathon** is a dynamic IoT-inspired web application that enables users to control a light bulb through interactive clicks and, in the future, SMS messages. The project demonstrates how web technologies simulate IoT interactions while integrating backend APIs for real-world use cases.

---

![Repo Stars](https://img.shields.io/github/stars/iamricky17/LightBulb_Toggle-IoT-AfricasTalkingHackathon?style=social) ![Forks](https://img.shields.io/github/forks/iamricky17/LightBulb_Toggle-IoT-AfricasTalkingHackathon?style=social) ![Last Commit](https://img.shields.io/github/last-commit/iamricky17/LightBulb_Toggle-IoT-AfricasTalkingHackathon) ![Repo Size](https://img.shields.io/github/repo-size/iamricky17/LightBulb_Toggle-IoT-AfricasTalkingHackathon) ![Downloads](https://img.shields.io/github/downloads/iamricky17/LightBulb_Toggle-IoT-AfricasTalkingHackathon/total)


---

## 🧐 About  

LightBulb_Toggle-IoT-Hackathon started as a simple web application built with **HTML**, **CSS**, and **JavaScript** to simulate toggling a light bulb’s state (on/off) and changing the surrounding background color.

It is evolving into a **React-based** app, integrated with:  
- **FastAPI** backend.
- **Django** for SMS API management.
- **Africa's Talking SMS API** for controlling the bulb remotely.  

With this, the interaction will transition from manual clicks to SMS-based control:
- Sending `ON` will turn the bulb **ON**.
- Sending `OFF` will turn the bulb **OFF**.

---

## 🚀 Features  

### 🔧 Current Features  
- Toggle the light bulb on/off by clicking anywhere on the screen.
- Changes the background to mimic lighting effects:  
  - `#020305` (Light Off)  
  - `#000405` (Light On).  

### 🔮 Upcoming Features  
- SMS-based interaction with **Africa's Talking API**.  
- Real-time updates via **WebSockets** (using React).  
- Python backend integration with **FastAPI** and **Django**.  
- Live device control simulation.  

---

## 🛠️ Technologies  

### 💻 Current Stack  
- ![HTML Icon](https://img.shields.io/badge/-HTML-E34F26?logo=html5&logoColor=white&style=flat) **HTML**  
- ![CSS Icon](https://img.shields.io/badge/-CSS-1572B6?logo=css3&logoColor=white&style=flat) **CSS**  
- ![JavaScript Icon](https://img.shields.io/badge/-JavaScript-F7DF1E?logo=javascript&logoColor=black&style=flat) **JavaScript**  

### 🔄 Planned Additions  
- ![React Icon](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=black&style=flat) **React**  
- ![WebSockets Icon](https://img.shields.io/badge/-WebSockets-000000?logo=socket.io&logoColor=white&style=flat) **WebSockets**  
- ![Python Icon](https://img.shields.io/badge/-FastAPI-009688?logo=python&logoColor=white&style=flat) **FastAPI (Python)**  
- ![Django Icon](https://img.shields.io/badge/-Django-092E20?logo=django&logoColor=white&style=flat) **Django**  
- ![SMS Icon](https://img.shields.io/badge/-Africa's%20Talking%20API-F24E1E?logo=sms&logoColor=white&style=flat) **Africa's Talking SMS API**  

---

## 🛠️ Installation  

### 📋 Prerequisites  
- [Node.js](https://nodejs.org/) & npm (for React integration)  
- Python 3.9+ (for FastAPI and Django)  
- Africa's Talking API credentials  

### 🔑 Steps  
1. Clone this repository:  
   ```bash
   git clone https://github.com/iamricky17/LightBulb_Toggle-IoT-AfricasTalkingHackathon.git
   cd LightBulb_Toggle-IoT-AfricasTalkingHackathon
   ```

2. Open `index.html` in your browser to view the current functionality.

3. To integrate with React and backend:
   - Install **React** and dependencies:  
     ```bash
     npm install react react-dom
     ```
   - Configure the **FastAPI** backend:  
     Modify the `backend/main.py` script to include your Africa's Talking API credentials.
   - Update the **SMS control script**:  
     Edit `frontend/src/smsControl.js` to integrate with Africa's Talking API.

---

## 📄 Code Reference  

### Frontend Code  
#### Modify `scripts.js` for the light toggle logic:
```javascript
document.addEventListener('click', () => {
    const body = document.body;
    body.style.backgroundColor = 
        body.style.backgroundColor === '#000405' ? '#020305' : '#000405';
    const bulb = document.getElementById('bulb');
    bulb.src = bulb.src.includes('bulbon') ? 'pic_bulboff.jpg' : 'pic_bulbon.jpg';
});
```

### Backend Code  
#### Integrate Africa's Talking SMS API in `backend/main.py`:  
```python
import africastalking

# Initialize SDK
username = "your_username"
api_key = "your_api_key"
africastalking.initialize(username, api_key)

# Set up SMS service
sms = africastalking.SMS

def send_sms(to, message):
    response = sms.send(message, [to])
    print(response)
```

---

## 📸 Screenshots  

### Light Off  
![Light Off](pic_bulboff.jpg)

### Light On  
![Light On](pic_bulbon.jpg)

---

## ⭐ Contribution  

Contributions are welcome!  
1. Fork the repository.  
2. Create a branch:  
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:  
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push the branch:  
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.  

If you like this project, don’t forget to **🌟 star the repo**!

--- 
