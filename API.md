# API Documentation
## Introduction
The API provides access to data about apartments, leases, and complaints. This documentation outlines the available endpoints, their corresponding HTTP methods, and any relevant details about the requests and responses.

## Endpoints
### Apartments
* `GET /api/apartments/`: Retrieves a list of all apartments.
	+ Request: None
	+ Response: JSON array of apartment objects
* `POST /api/apartments/`: Creates a new apartment.
	+ Request: JSON object with apartment details (e.g., name, address)
	+ Response: JSON object with created apartment details

### Leases
* `GET /api/leases/`: Retrieves a list of all leases.
	+ Request: None
	+ Response: JSON array of lease objects
* `POST /api/leases/`: Creates a new lease.
	+ Request: JSON object with lease details (e.g., apartment ID, start date)
	+ Response: JSON object with created lease details

### Complaints
* `GET /api/complaints/`: Retrieves a list of all complaints.
	+ Request: None
	+ Response: JSON array of complaint objects
* `POST /api/complaints/`: Creates a new complaint.
	+ Request: JSON object with complaint details (e.g., apartment ID, description)
	+ Response: JSON object with created complaint details

### Notifications
*

## Request and Response Formats
* Requests: JSON
* Responses: JSON

## Authentication and Authorization
The API uses token-based authentication. To use the API, you must first obtain a valid token by making a `POST` request to `/api/token/` with your username(password could be added)

## Example Usage
To create a new apartment, make a `POST` request to `/api/apartments/` with a JSON object containing the apartment details:
```json
{
    "name": "Example Apartment",
    "address": "123 Main St"
}
