import React, { useState } from "react";
import "./services.css";
import Swal from "sweetalert2"; // Import SweetAlert2

const ServicesPage = () => {
  const [services, setServices] = useState([
    {
      ServiceID: 1,
      ServiceType: "Room Service",
      Description: "Enjoy in-room dining with a variety of meals and beverages.",
      Price: 20,
      Image: "https://img.freepik.com/free-photo/side-view-breakfast-omelet-with-mushrooms-juice-croissants-room-service-hotel-with-amazing-sea-view_176474-2482.jpg",
    },
    {
      ServiceID: 2,
      ServiceType: "Laundry",
      Description: "Get your clothes cleaned and pressed with our laundry service.",
      Price: 15,
      Image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGF1bmRyeSUyMHJvb218ZW58MHx8MHx8fDA%3D",
    },
    {
      ServiceID: 3,
      ServiceType: "Airport Pickup",
      Description: "Enjoy a smooth airport transfer with our private shuttle service.",
      Price: 50,
      Image: "https://westaidvisasolutions.com/wp-content/uploads/2023/12/airport-pickup.jpg",
    },
    {
      ServiceID: 4,
      ServiceType: "Spa Treatment",
      Description: "Relax and unwind with a soothing spa treatment.",
      Price: 80,
      Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl0lfqZu6x32youHmc_ezA-6Nm3r_yAyBMag&s",
    },
    {
      ServiceID: 5,
      ServiceType: "Fitness Center Access",
      Description: "Stay fit with access to our fully-equipped fitness center.",
      Price: 25,
      Image: "https://media.istockphoto.com/id/1277242852/photo/holding-weight-and-sitting.jpg?s=612x612&w=0&k=20&c=3sy-VVhUYjABpNEMI2aoruXQuOVb__-AUR6BzOHoSJg=",
    },
  ]);

  const [newService, setNewService] = useState({
    ServiceType: "",
    Description: "",
    Price: "",
    Image: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewService({
      ...newService,
      [name]: value,
    });
  };

  const handleAddService = () => {
    if (
      !newService.ServiceType ||
      !newService.Description ||
      !newService.Price ||
      !newService.Image
    ) {
      alert("Please fill in all fields!");
      return;
    }

    setServices([
      ...services,
      {
        ...newService,
        ServiceID: Date.now(), // Unique ID based on timestamp
      },
    ]);

    setNewService({
      ServiceType: "",
      Description: "",
      Price: "",
      Image: "",
    });
  };

  const handleBookService = (serviceType) => {
    // Show a SweetAlert2 alert when the user clicks "Book Service"
    Swal.fire({
      title: "Service Booked!",
      text: `You have successfully booked ${serviceType}.`,
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  return (
    <div className="services-page">
      <h2>Hotel Services</h2>

      {/* Services List */}
      <div className="services-list">
        {services.map((service) => (
          <div key={service.ServiceID} className="service-card">
            <div className="service-image-container">
              <img src={service.Image} alt={service.ServiceType} className="service-image" />
            </div>
            <h3>{service.ServiceType}</h3>
            <p><strong>Description:</strong> {service.Description}</p>
            <p><strong>Price:</strong> ${service.Price}</p>
            <button 
              className="book-service" 
              onClick={() => handleBookService(service.ServiceType)}
            >
              Book Service
            </button>
          </div>
        ))}
      </div>

      {/* Admin Form for Adding a New Service */}
      <div className="add-service-form">
        <h3>Add a New Service</h3>
        <input
          type="text"
          name="ServiceType"
          value={newService.ServiceType}
          onChange={handleInputChange}
          placeholder="Service Type"
        />
        <textarea
          name="Description"
          value={newService.Description}
          onChange={handleInputChange}
          placeholder="Service Description"
        />
        <input
          type="number"
          name="Price"
          value={newService.Price}
          onChange={handleInputChange}
          placeholder="Service Price"
        />
        <input
          type="text"
          name="Image"
          value={newService.Image}
          onChange={handleInputChange}
          placeholder="Image URL"
        />
        <button onClick={handleAddService} className="add-service-btn">
          Add Service
        </button>
      </div>
    </div>
  );
};

export default ServicesPage;
