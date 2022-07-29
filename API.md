# API POINTS

## data

### Menampilkan data user
```
GET: /user

response:
[
  {
    "_id"             : "",
    "name"            : "",
    "username"        : "",
    "email"           : "",
    "emailVerified"   : "",
    "birth"           : "",
    "facebook"        : "",
    "github"          : "",
    "bio"             : "",
    "profilePicture"  : ""
  },
  {
    ...
  }
]
```
### Menampilkan data user berdasarkan ```id```
```
GET: /users/[id]

response:
{
    "_id"             : "",
    "name"            : "",
    "username"        : "",
    "email"           : "",
    "emailVerified"   : "",
    "birth"           : "",
    "facebook"        : "",
    "github"          : "",
    "bio"             : "",
    "profilePicture"  : ""
}
```
### Menambahkan data user
```
POST: /user

data:
{
    "_id"             : "",
    "name"            : "",
    "username"        : "",
    "email"           : "",
    "emailVerified"   : "",
    "birth"           : "",
    "facebook"        : "",
    "github"          : "",
    "bio"             : "",
    "profilePicture"  : ""
}

response:
true    //if true
false   //if false
```
### Mengubah data user
```
PUT: /user/[id]

data:
{
    "_id"             : "",
    "name"            : "",
    "username"        : "",
    "email"           : "",
    "emailVerified"   : "",
    "birth"           : "",
    "facebook"        : "",
    "github"          : "",
    "bio"             : "",
    "profilePicture"  : ""
}

response:
true    //if true
false   //if false
```
### Menghapus data user
```
DELETE: /user/[id]

response:
true    //if true
false   //if false
```
## POSTS
### Menampilkan seluruh post
```
GET: /posts

response:
[
  {
    "_id"       : "",
    "title"     : "",
    "content"   : "",
    "creatorId" : "",
    "createdAt" : "",
    creator     : {
      "_id"             : "",
      "name"            : "",
      "username"        : "",
      "email"           : "",
      "emailVerified"   : "",
      "birth"           : "",
      "facebook"        : "",
      "github"          : "",
      "bio"             : "",
      "profilePicture"  : ""
    }
  },
  {
    ...
  }
]
```
### Menampilkan post berdasarkan ```id```
```
GET: /posts/[id]

response:
{
    "_id"       : "",
    "title"     : "",
    "content"   : "",
    "creatorId" : "",
    "createdAt" : "",
    creator     : {
      "_id"             : "",
      "name"            : "",
      "username"        : "",
      "email"           : "",
      "emailVerified"   : "",
      "birth"           : "",
      "facebook"        : "",
      "github"          : "",
      "bio"             : "",
      "profilePicture"  : ""
    }
  }
```
### Menambahkan post
```
POST: /posts

data:
{
  "title"     : "",
  "content"   : "",
}

response:
true    //if true
false   //if false
```
### Mengubah post
```
PUT: /posts

data:
{
  "title"     : "",
  "content"   : "",
}

response:
true    //if true
false   //if false
```
### Menghapus post
```
DELETE: /posts

response:
true    //if true
false   //if false
```

## COMMENTS
### Menampilkan seluruh comment per post
```
GET: /posts/[id]/comments

response:
[
  {
    "_id"       : "",
    "content"   : "",
    "creatorId" : "",
    "createdAt" : ""
  },
  {
    ...
  }
]
```
### Menampilkan comment berdasarkan ```id``` per post
```
GET: /posts/[id]/comments/[id]

response:
{
  {
    "_id"       : "",
    "content"   : "",
    "creatorId" : "",
    "createdAt" : ""
  },
  {
      ...
    }
}
```
### Menambahkan comment pada post
```
POST: /posts/[id]/comments

data:
{
  "title"     : "",
  "content"   : "",
}

response:
true    //if true
false   //if false
```
### Mengubah comment pada post
```
PUT: /posts/[id]/comments

data:
{
  "title"     : "",
  "content"   : "",
}

response:
true    //if true
false   //if false
```
### Menghapus comment pada post
```
DELETE: /posts/[id]/comments

response:
true    //if true
false   //if false
```

## Database Design

| User                        | Post             | Comment         |
|-----------------------------|------------------|-----------------|
| _id: string                  | _id: string      | _id: string     |
| username: string            | title: string    | content: string |
| name: string                | content: string  |                 |
| email: string               |                  |                 |
| emailVerified: boolean      |                  |                 |
| birth: string               |                  |                 |
| github: string              |                  |                 |
| facebook: string            |                  |                 |
| bio: string                 |                  |                 |

## Tech Stack
* NodeJs
* NextJs
* React
* MongoDB
