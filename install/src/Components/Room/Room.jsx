import React, { useState, useEffect } from "react";
import "./Room.css"; 

const RoomPage = () => {
  const [rooms, setRooms] = useState([
    {
      RoomID: 1,
      RoomNumber: "101",
      RoomType: "Deluxe",
      Status: "Available",
      Price: "150",
      Description: "A luxurious room with a king-sized bed, modern amenities, and a beautiful city view.",
      Image: "https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg",
    },
    {
      RoomID: 2,
      RoomNumber: "102",
      RoomType: "Standard",
      Status: "Occupied",
      Price: "100",
      Description: "A comfortable room with a queen-sized bed and all the basic amenities for a pleasant stay.",
      Image: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2019/09/25/870587-hotel-room-092519.jpg",
    },
    {
      RoomID: 3,
      RoomNumber: "103",
      RoomType: "Suite",
      Status: "Available",
      Price: "250",
      Description: "A spacious suite with a living area, elegant decor, and breathtaking views of the surroundings.",
      Image: "https://media.istockphoto.com/id/492189224/photo/seaview-bedroom.jpg?s=612x612&w=0&k=20&c=tSL5OoSdxW3l7WzdBGU2_NnGNjDH88twjNZTTkll2jY=",
    },
    {
      RoomID: 4,
      RoomNumber: "104",
      RoomType: "Deluxe",
      Status: "Available",
      Price: "150",
      Description: "A luxurious room with a king-sized bed, modern amenities, and a beautiful city view.",
      Image: "https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg",
    },
  ]);
  const [roomData, setRoomData] = useState({
    RoomID: "",
    RoomNumber: "",
    RoomType: "",
    Status: "Available",
    Price: "",
    Description: "",
    Image: "",
  });
  const [editingRoom, setEditingRoom] = useState(null);
  const [loading, setLoading] = useState(false);

  
  useEffect(() => {
    localStorage.setItem("rooms", JSON.stringify(rooms));
  }, [rooms]);

  const handleAddRoom = () => {
    if (!roomData.RoomNumber || !roomData.RoomType || !roomData.Price || !roomData.Image) {
      alert("Please fill in all fields");
      return;
    }

    setLoading(true); 
    const newRoom = {
      ...roomData,
      RoomID: Date.now(), 
    };
    setRooms([...rooms, newRoom]);
    setRoomData({
      RoomID: "",
      RoomNumber: "",
      RoomType: "",
      Status: "Available",
      Price: "",
      Description: "",
      Image: "",
    });
    setLoading(false);
  };

  const handleDeleteRoom = (roomID) => {
    setLoading(true); 
    const updatedRooms = rooms.filter((room) => room.RoomID !== roomID);
    setRooms(updatedRooms);
    setLoading(false); 
  };

  const handleEditRoom = (roomID) => {
    const roomToEdit = rooms.find((room) => room.RoomID === roomID);
    setRoomData(roomToEdit);
    setEditingRoom(roomID);
  };

  const handleSaveRoom = () => {
    setLoading(true);
    const updatedRooms = rooms.map((room) =>
      room.RoomID === editingRoom ? { ...room, ...roomData } : room
    );
    setRooms(updatedRooms);
    setRoomData({
      RoomID: "",
      RoomNumber: "",
      RoomType: "",
      Status: "Available",
      Price: "",
      Description: "",
      Image: "",
    });
    setEditingRoom(null);
    setLoading(false);
  };

  return (
    <div className="room-page">
      <h2>Hotel Room Management</h2>

      {/* Room Form for Adding/Editing */}
      <div className="room-form">
        <input
          type="text"
          value={roomData.RoomNumber}
          onChange={(e) => setRoomData({ ...roomData, RoomNumber: e.target.value })}
          placeholder="Room Number"
        />
        <input
          type="text"
          value={roomData.RoomType}
          onChange={(e) => setRoomData({ ...roomData, RoomType: e.target.value })}
          placeholder="Room Type"
        />
        <input
          type="number"
          value={roomData.Price}
          onChange={(e) => setRoomData({ ...roomData, Price: e.target.value })}
          placeholder="Price"
        />
        <textarea
          value={roomData.Description}
          onChange={(e) => setRoomData({ ...roomData, Description: e.target.value })}
          placeholder="Room Description"
        />
        <input
          type="text"
          value={roomData.Image}
          onChange={(e) => setRoomData({ ...roomData, Image: e.target.value })}
          placeholder="Image URL"
        />
        <select
          value={roomData.Status}
          onChange={(e) => setRoomData({ ...roomData, Status: e.target.value })}
        >
          <option value="Available">Available</option>
          <option value="Occupied">Occupied</option>
        </select>

        {editingRoom ? (
          <button onClick={handleSaveRoom}>Save Room</button>
        ) : (
          <button onClick={handleAddRoom}>Add Room</button>
        )}
      </div>

      {/* Rooms List */}
      <div className="room-list">
        {rooms.map((room) => (
          <div key={room.RoomID} className="room-card">
            <div className="room-image-container">
              <img src={room.Image} alt={room.RoomType} className="room-image" />
            </div>
            <div className="room-details">
              <h3>{room.RoomNumber}</h3>
              <p><strong>Type:</strong> {room.RoomType}</p>
              <p><strong>Status:</strong> {room.Status}</p>
              <p><strong>Price:</strong> ${room.Price}</p>
              <p><strong>Description:</strong> {room.Description}</p>
              <div className="room-buttons">
                <button onClick={() => handleEditRoom(room.RoomID)}>Edit</button>
                <button onClick={() => handleDeleteRoom(room.RoomID)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Spinner */}
      {loading && <div className="spinner"></div>}
    </div>
  );
};

export default RoomPage;
