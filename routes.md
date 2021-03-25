# login

### BASE_ROUTE: `/auth/userLogin/`

---

METHOD: POST

BODY: {

- username,
- password

}

RESPONSE: {

- token,
- refreshToken,
- profileType:< new, collaborator, manager, admin, analyst>

}

---

# F-01

### BASE_ROUTE: `/access/`

---

METHOD: GET

DETAIL_ROUTE: `/access/{userId}/`

RESPONSE: {

- username,
- manager,
- email,
- company,
- name,
- phone,
- field,
- role,
- employeeNumber,
- vipFlag,
- emergencyFlag,
- status: Array<{date,action}

}

---

METHOD: PUT

DETAIL_ROUTE: `/access/{userId}/`

BODY: {

- username,
- manager,
- email,
- company,
- name,
- phone,
- field,
- role,
- employeeNumber,
- vipFlag,
- emergencyFlag,

}

RESPONSE: HTTP_STATUS_CODE

---

METHOD: POST

DETAIL_ROUTE: `/access/{userId}/`

RESPONSE: HTTP_STATUS_CODE

---

# F-02

### BASE_ROUTE: `/myProfile`

---

METHOD: GET

DETAIL_ROUTE: `/myProfile/{userId}/`

RESPONSE: {

- username,
- manager,
- email,
- company,
- name,
- phone,
- field,
- role,
- employeeNumber,
- vipFlag,
- emergencyFlag,
- pointOfSales: Array<{name}
- profileAccess: { profileName, details: Array<system/modules/transactions}

}

---

METHOD: PUT

DETAIL_ROUTE: `/myProfile/{userId}/`

BODY: {

- username,
- manager,
- email,
- company,
- name,
- phone,
- field,
- role,
- employeeNumber,
- vipFlag,
- emergencyFlag,

}

RESPONSE: HTTP_STATUS_CODE

---
