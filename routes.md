# login

`/auth/userLogin/`

> METHOD: POST
>
> BODY: {
>
> - username,
> - password
>
> }
>
> RESPONSE: {
>
> - token,
> - refreshToken,
> - profileType:< new, collaborator, manager, admin, analyst >
>
> }

# F-01

`/access/`

> METHOD: GET
>
> ROUTE: `/access/{userId}/`
>
> RESPONSE: {
>
> - username,
> - manager,
> - email,
> - company,
> - name,
> - phone,
> - field,
> - role,
> - employeeNumber,
> - vipFlag,
> - emergencyFlag,
> - status: Array<{date,action}>
>
> }

> METHOD: PUT
>
> ROUTE: `/access/{userId}/`
>
> BODY: {
>
> - username,
> - manager,
> - email,
> - company,
> - name,
> - phone,
> - field,
> - role,
> - employeeNumber,
> - vipFlag,
> - emergencyFlag,
>
> }
>
> RESPONSE: HTTP_STATUS_CODE

> METHOD: POST
>
> ROUTE: `/access/{userId}/`
>
> RESPONSE: HTTP_STATUS_CODE

# F-02

`/myProfile`

> METHOD: GET
>
> ROUTE: `/myProfile/{userId}/`
>
> RESPONSE: {
>
> - username,
> - manager,
> - email,
> - company,
> - name,
> - phone,
> - field,
> - role,
> - employeeNumber,
> - vipFlag,
> - emergencyFlag,
> - pointOfSales: Array<{name}>
> - profileAccess: { profileName, details: Array<system/modules/transactions>}
>
> }

> METHOD: PUT
>
> ROUTE: `/myProfile/{userId}/`
>
> BODY: {
>
> - username,
> - manager,
> - email,
> - company,
> - name,
> - phone,
> - field,
> - role,
> - employeeNumber,
> - vipFlag,
> - emergencyFlag,
>
> }
>
> RESPONSE: HTTP_STATUS_CODE
