# API Documentation

## Introduction

The API provides access to data about apartments, leases, and complaints. This documentation outlines the available endpoints, their corresponding HTTP methods, and any relevant details about the requests and responses.

## Url

https://two025-cohort-team-2.onrender.com/

## Endpoints

## Register users

- `POST /api/auth/register-landlord`: Create a new landlord account
- `POST /api/auth/register-tenant`: Create a new tenant account
- `POST /api/update-tenant{tenante_ID}`' : Updates already created tenant

- `GET /api/all-tenants/` : Gets a list of all the tenants.
- `GET /api/all-landlords` : Gets a list of all the landlords.

## Login

- `GET /api/login/ `api/login/ token set in auth token {key}

### Apartments

- `GET /api/apartment/`: Retrieves a list of all apartments & `GET /api/apartment/{apartment_id}` Retrieves a single apartment ID.

  - Response: JSON array of apartment objects

- `POST /api/apartment/`: Creates a new apartment.
  - Request: JSON object with apartment details (e.g., name, address)
  - Response: JSON object with created apartment details

### Leases

- `GET /api/lease/`: Retrieves a list of all leases.
- `GET /api/sign-lease/` : Retrieves list of signed leases can add {lease_ID} to end for single lease retrieval.
  - Request: None
  - Response: JSON array of lease objects
- `POST /api/lease/`: Creates a new lease.
  - Request: JSON object with lease details (e.g., apartment ID, start date)
  - Response: JSON object with created lease details

### Complaints

- `GET /api/complaints/`: Retrieves a list of all complaints.
  ` GET /api/complaint/{lease_id}`: Retrive a single lease ID.
  - Request: None
  - Response: JSON array of complaint objects
- `POST /api/create-complaint/`: Creates a new complaint.

## Keycode

`POST /api/keycode/`: creates a keycode. + Request: JSON object with complaint details (e.g., apartment ID, description) + Response: JSON object with created complaint details

##

## Example Usage

To create a new apartment, make a `POST` request to `/api/apartment/` with a JSON object containing the apartment details:

```json
{
  "name": "Example Apartment",
  "address": "123 Main St"
}
```
