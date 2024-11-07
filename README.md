# VectorIO

## Overview

>What is your app? Give a brief description in a couple of sentences.

VectorIo is a website that will (as of right now) help tech people in IT departments like IT Help Desk, technical, Relocation Technicians, IT support, and IT infrastructure. This website is made for quick and easy use with more common problems and information. Also if you have some not-so-common problems we do have forms that people can comment on and put their ideas together.

### Problem Space

>Why is your app needed? Give any background information about any pain points or other reasons.

Sometimes when tech looking for a solution to a problem, we have to do a lot of Google searching and click on another website. We are going to try to stop and also give information about the item and model and version of that product, to be more easily used.


### Features And User Profile

 As a user, I want to find articles, posts, or general information about computer hardware, accessories, wiring, software, OS, and other information. If I were to look at forms or articles or information I as a user should have the option to choose out of my search.

## Implementation

### Tech Stack

>List technologies that will be used in your app, including any
libraries to save time or provide more functionality. Be sure to 
research any potential limitations.

 React
 MySQL
 Express
 Client libraries:
 - react
 - react-router
 - Axios
 - Three.js
 - (Maybe More)
 Server libraries:
 - Knex
 - Express.js
 - Node.js
 - (Maybe More)
    

### APIs

>List any external sources of data that will be used in your app.
 I'm going to make my API.

 No external APIs, I'm making my own
 
 [CLick Here](https://github.com/jameskolwolf1/Vector.io_API)

### Sitemap

 > List the pages of your app with brief descriptions. You can show this visually, or write it out.

 HomePage ("/")
 ComputerComponents ("/ComputerComponents")
 ComputerComponent("/ComputerComponent/:id")
 Posts("/ComputerComponent/:id/Posts")
 Post("/ComputerComponent/:id/Post/:id")
 latestPost(/Posts)
 About Page(/About)

 ![](PageRoute.jpeg)

### Mockups

Provide visuals of your app's screens. You can use pictures of hand-drawn sketches, or wireframing tools like Figma.

### Home Page Current Look
![](vector_Home(D).png)

#### Home Page Drawing
![](HomePage.jpg)

### Post Page Current Look
![](vector_form_compontent(D).png)

#### Post Page Drawing
![](PostPage.jpg)

### ComputerComponentPage Current Look
![](vector_Article_dp(D).png)

#### ComputerComponentPage Drawing
![](CompputerComponitePage.jpg)

#### About Page Drawing
Soon!
![](AboutPage.jpg)

#### Other Ideas Drawings
Soon!
![](OtherIdeasPages.jpg)

### Data

Describe your data and the relationships between the data points. You can show this visually using diagrams, or write it out. 

[Click Here for Diagram](https://drawsql.app/teams/who-5/diagrams/who)

### Endpoints

List endpoints that your server will implement, including HTTP methods, parameters, and example responses.

**Get /ComputerComponents**
- Get the List of ComputerComponents 

No Parameters

Response: 
```
 {
        id: 1,
        title: "DisplayPort Cable (DP)",
        image_product: "http://localhost:8080/Cables/DisplayPort/image_0.jpg",
        image_info: "http://localhost:8080/Cables/DisplayPort/info_0.jpg",
        general_info: "A Display specifically designed ...,
        category: "cable"
      },
      {
        id: 2,
        title: "HDMI Cable",
        image_product: "http://localhost:8080/Cables/HDMI/image0.jpeg",
        image_info: "http://localhost:8080/Cables/HDMI/info_0.jpg",
        general_info:
          "HDMI means High-Definition Multimedia Interface, a standard for simultaneously....",
        category: "cable"
      },
      {
        id: 3,
        title: "Type C / USB-C Cable",
        image_product: "http://localhost:8080/Cables/Type_C/image0.jpg",
        image_info: "http://localhost:8080/Cables/Type_C/info_0.jpg",
        general_info: "Type-C is slim enough for a smartphone or .....",

        category: "cable"
      },
 .........
```

**Get /ComputerComponent/:id**
-Get will get the ComputerComponent by id
Parameters:
- id: ComputerComponent id as a number

Response: 
```
    {
        id: 2,
        title: "HDMI Cable",
        image_product: "http://localhost:8080/Cables/HDMI/image0.jpeg",
        image_info: "http://localhost:8080/Cables/HDMI/info_0.jpg",
        general_info: "HDMI means High-Definition Multimedia Interface, a standard for simu HDTVs had at least one HDMI port.....",
        category: "cable"
      },
```
**Get /ComputerComponent/:id/VersionOrModels**
- Get will get the VersionORModel by looking at the VersionORModel ComputerComponent id which should be a list

Parameters:
- id: ComputerComponent id as a number and as well of the VersionORModel 
Response: 
```
    {
        id: 2,
        computerComponents_id: 1,
        title: "DisplayPort 1.1 (2007)",
        info1: "Max Resolution: 2560x1600 at 60Hz",
        info2: "Bandwidth: 8.64 Gbps",
        info3: "Key Features: Added support for DisplayPort-to-HDMI/DVI adapters and HDCP (High-bandwidth Digital Content Protection) for secure transmission of high-definition content."
      },
```
**Get /ComputerComponent/:id/solutions**
- Get will get the solutions by looking at the solutions ComputerComponent ID which should be a list

Parameters:
- id: ComputerComponent id as a number and as well of the id of the solution
Response: 
```
    {
        id: 53,
        computerComponents_id: 9,
        text: "Overheating / High Temperatures: The Ryzen 7000 series processors can generate significant heat, so ensure the CPU cooler is adequate. Upgrade the cooling solution to a high-performance air cooler or liquid cooler if necessary. Ensure there is good case airflow by adding or repositioning fans inside the case to improve ventilation.",
    },
```
**Get /Posts**
- Get will get the list of Post

Parameters:
- id: Post id and ComputerComponent id as a number
Response: 
```
    {
        id: 1,
        computerComponents_id: 1,
        title: "No Signal Detected: Why is My Monitor Not Working?",
        description: "I’ve got a new DP cable, but my monitor shows No Signal. Everything’s plugged in correctly. Could the cable be bad, or is there a DP version issue here? Any suggestions would help!",
        post_date: timestamp.toISOString().slice(0, 19).replace('T', ' '),
    },
```
**Post  /Posts**
- Post will post a post 

Parameters:
- id: Post id, Comment id, and ComputerComponent id as a number

Response: 
```
{
        id: 1,
        computerComponents_id: 1,
        title: "No Signal Detected: Why is My Monitor Not Working?",
        description: "I’ve got a new DP cable, but my monitor shows No Signal. Everything’s plugged in correctly. Could the cable be bad, or is there a DP version issue here? Any suggestions would help!",
        post_date: timestamp.toISOString().slice(0, 19).replace('T', ' '),
      },
      {
        id: 2,
        computerComponents_id: 1,
        title: "Screen Flickering at High Refresh Rate – What’s Going On?",
        description: "My monitor flickers like crazy at 144Hz with a DisplayPort connection, but it’s fine at 60Hz. Could this be a bandwidth problem with the cable, or should I look into the monitor settings?",
        post_date: timestamp.toISOString().slice(0, 19).replace('T', ' '),
  
      },
      {
        id: 3,
        computerComponents_id: 1,
        title:"Getting Audio but No Video on DisplayPort Connection",
        description: "I’m confused! My DisplayPort connection is delivering audio but no video. I’ve tried restarting everything and updating drivers. Could it be the cable, or is there something wrong with the graphics settings?",
        post_date: timestamp.toISOString().slice(0, 19).replace('T', ' '),
  
      },
      .....
```
**Get /Post/:id/Comments**
- Get will get the Comments for that specific post

Parameters:
- id: Post id, computerComponent id  as a number

Response: 
```
{
    id: 1,
    posts_id: 1,
    text: "Try using a different DisplayPort cable or port on the monitor and PC to rule out a faulty cable or port",
    likes: 3
  },
  {
    id: 2,
    posts_id: 1,
    text: "Ensure both your monitor and PC support the same DP version (e.g., DP 1.2, DP 1.4)",
    likes: 3
  },
  {
    id: 3,
    posts_id: 1,
    text: "Sometimes, outdated graphics drivers can cause issues. Update your GPU drivers to the latest version",
    likes: 0
  },
  ...
```
**Post /Post/:id/Comments**
- Post will Post a comment on that Post

Parameters:
- id: Post id, Comment id  as a number

Response: 

```
 {

 "post_id": 1,
 "text": 1,
 "likes": 0
 },
```

**Put /Post/:id/Comments**
- put will change likes in a  comment 

Parameters:
- id: Post id, Comment id  as a number

Response: 

```
 {
 "likes": 1
 },
```


## Roadmap

>Scope your project as a sprint. Break down the tasks that will need to be completed and map out timeframes for implementation working back from the capstone due date. 

**Make and format the DB with data**
- Get data for a website and format that will be useful for the user and format  it 

**Create server**
- express project with routing

**Create migrations**

**Create seeds with sample  ComputerComponent, Posts, Comment, Solution, and VersionOrModel**

**Create client**
- react project with routes and pages

**Features**
- Home Page
- List/Nav/Page for the Category
 - User can have a Nav bar to see what category or make a Page for it
- ComputerComponent Page when clicking the category and seeing the items and clicking on the items will give details about that item.
 - There will also be a list of solutions on that page
 - Also different versions or models with general info
- Post Page will give a list of Post
 - Post will be linked to the article and also link to the Comments section 
 - Comment will have a liking system
    
**Bugfixes**

**DEMO DAY**

## Future Implementations

>Your project will be marked based on what you committed to in the above document. Here, you can list any additional features you may complete after the MVP of your application is built, or if you have extra time before the Capstone due date.

- Login and Register User System
- More Data for Not only Computer Cable but Hardware, and Coding Computer Hardware
- Dislike Button 
