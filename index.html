<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Araç Takip</title>
  <link rel="manifest" href="manifest.json">
  <script>
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('service-worker.js');
    }
  </script>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 20px;
      background: #f5f7fb;
      color: #333;
    }
    h1 {
      text-align: center;
    }
    .vehicle {
      background: #fff;
      padding: 15px;
      border-radius: 8px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      margin-bottom: 15px;
    }
    label {
      display: block;
      margin-top: 8px;
      font-weight: bold;
    }
    input {
      width: 100%;
      padding: 8px;
      margin-top: 5px;
      border-radius: 5px;
      border: 1px solid #ccc;
    }
    button {
      margin-top: 10px;
      padding: 10px;
      width: 100%;
      border: none;
      border-radius: 5px;
      background-color: #007bff;
      color: white;
      font-weight: bold;
      cursor: pointer;
    }
    button.delete {
      background-color: #dc3545;
    }
    button.add {
      background-color: #28a745;
    }
    .warning {
      color: red;
      font-weight: bold;
      margin-top: 5px;
    }
  </style>
</head>
<body>
  <h1>🚗 Araç Takip Sistemi</h1>

  <div id="vehicleList"></div>

  <button class="add" onclick="addVehicle()">+ Yeni Araç Ekle</button>

  <script>
    const vehicleList = document.getElementById('vehicleList');

    function saveData() {
      const vehicles = [];
      document.querySelectorAll('.vehicle').forEach(div => {
        vehicles.push({
          name: div.querySelector('.name').value,
          plate: div.querySelector('.plate').value,
          start: div.querySelector('.start').value,
          end: div.querySelector('.end').value
        });
      });
      localStorage.setItem('vehicles', JSON.stringify(vehicles));
      alert('Kaydedildi ✅');
    }

    function deleteVehicle(btn) {
      btn.parentElement.remove();
      saveData();
    }

    function addVehicle(data = {}) {
      const div = document.createElement('div');
      div.className = 'vehicle';
      div.innerHTML = `
        <label>Araç Adı:</label>
        <input type="text" class="name" value="${data.name || ''}">
        <label>Plaka:</label>
        <input type="text" class="plate" value="${data.plate || ''}">
        <label>Başlangıç Tarihi:</label>
        <input type="date" class="start" value="${data.start || ''}">
        <label>Bitiş Tarihi:</label>
        <input type="date" class="end" value="${data.end || ''}">
        <div class="remaining"></div>
        <button onclick="saveData()">Kaydet</button>
        <button class="delete" onclick="deleteVehicle(this)">Sil</button>
      `;
      vehicleList.appendChild(div);
    }

    function loadData() {
      const data = JSON.parse(localStorage.getItem('vehicles') || '[]');
      data.forEach(addVehicle);
      checkReminders();
    }

    function checkReminders() {
      document.querySelectorAll('.vehicle').forEach(div => {
        const endDate = div.querySelector('.end').value;
        const remainingDiv = div.querySelector('.remaining');
        if (endDate) {
          const today = new Date();
          const end = new Date(endDate);
          const
