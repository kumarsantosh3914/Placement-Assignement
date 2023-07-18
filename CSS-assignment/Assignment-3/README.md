## Assignment Questions 3

**_Q.1 What is a Media Query in CSS, and what is its purpose?_**

**Ans-** A media query in CSS is a way to apply different styles to  a web page depending on the device or environment it is being viewed on. Media queries are used in responsive web design to make sure that a website looks good and functions properly on all devices, from desktops to smartphones.

_Here are some of the benefits of using media queries in CSS._

- Responsive web design
- Improved user experience
- Increased accessibility


**_Q.2 How do you define a media query in CSS?_**

**Ans-** A media query in CSS is defined using the @media rule. The @media rule is followed by a media type and one or more media features. The media type specifies the type of device or environment that the media
query is trageting.

**The Syntax for a media query is as follows:**
```
@media [media_type] {
  /* Styles for the specified media type */
}
```

**_Q.3 Explain the concept of Breakpoints in Responsive Web Design and How They are used in Media Queries._**

**Ans-** Breakpoints are a key concept in responsive web design. They are the points at which the layout of a web page changes to accommodate different screen sizes. Breakpoints are used in media queries to control which styles are applied to a web page depending on the size of the viewport.

For example, you might have a breakpoint at 768px. This means that if the width of the viewport is less than 768px, then the styles inside the media query will be applied. If the width of the viewport is greater than or equal to 768px, then the styles inside the media query will not be applied.

Breakpoints are typically defined in pixels, but they can also be defined in other units, such as ems or percentages. The exact breakpoints that you use will depend on the design of your web page and the devices that you want to support.

_Here's an example of how breakpoints can be used in media queries:_

```
@media (max-width: 768px) {
  /* Styles for screens less than 768px wide */
}

@media (min-width: 768px) and (max-width: 992px) {
  /* Styles for screens between 768px and 992px wide */
}

@media (min-width: 992px) {
  /* Styles for screens wider than 992px */
}
```

**_Q.4 What is the purpose of using Media Queries for Print Media?_**

**Ans-** Media queries can be used to create different styles for print media. This can be useful for a number of reasons, including:

- To improve the readability of the printed page. For example, you can use media queries to increase the font size or line height on printed pages.
- To improve unnecessary elements from the printed page. For example, you can use media queries to hide navigation menus or advertising banners on printed pages.
- To add custom styles for printed pages. For example, you can use media queries to add headers or footers to printed pages.

**_Q.5 What is the purpose of the orientation media feature?_**

**Ans-** The orientation media feature is used to check the orientation of the viewport (or the page box, for paged media). It can be used to apply different styles depending on whether the device is in portrait of landscape orientation.

The Orientation media feature has two values: portrait and landscapre. The portrait value is used when the viewport is taller than it is wide, and the landscape value is used when the viewport is wider than it is tall.


**_Q.6 Imagine you are a web developer working for a creative agency that specializes in building visually appealing and interactive websites. The agency has recently received a client request to create a landing page similar to the design of the one-page website: https://www.getonecard.app/. The client wants to showcase a video prominently on the page to engage visitors._**

**_Your task is to create a simple webpage that replicates the one-page landing page design, including a responsive layout and an HTML video. The below images are for your reference. Some browsers don’t allow you to play videos without the controls attribute. So, you can add controls here, we will learn how to play a video without the controls attribute in the later sections._**

**Ans-** [Link](https://github.com/kumarsantosh3914/Placement-Assignement/tree/master/CSS-assignment/Assignment-3/Question6)

**_Q.7 You are tasked with building a webpage that displays an image gallery using a grid layout. The challenge is to ensure the gallery is visually appealing and functional on both large and small screens. On large screens, the gallery should display multiple images per row, while on small screens, it should collapse into a single column for optimal viewing. Refer to the attached images for visual reference. Implement this using CSS Grid and media queries for responsiveness._**

**Ans-** [Link](https://github.com/kumarsantosh3914/Placement-Assignement/tree/master/CSS-assignment/Assignment-3/Question7)

**_Q.8 In this coding challenge, your task is to create an information section for the previously built OneCard webpage clone, focusing on the different modes like dark and light modes. The webpage should look different depending on the screen size: dark mode for larger screens and light mode for smaller devices. The reference images are attached below._**

**Ans-** [Link](https://github.com/kumarsantosh3914/Placement-Assignement/tree/master/CSS-assignment/Assignment-3/Question8)

**_Q.9 You have reached the final task of learning responsive web design, which involves designing a responsive footer. Your goal is to build a simple webpage footer that matches the design shown in the attached image. The footer should adapt to different screen sizes, ensuring optimal visibility and alignment of the content. Refer to the attached image for a visual reference._**

**Ans-** [Link](https://github.com/kumarsantosh3914/Placement-Assignement/tree/master/CSS-assignment/Assignment-3/Question9)


**_Q.10 You have been given to create a student dashboard page that includes a student details table. The challenge lies in handling the table's display on different screen sizes. On large screens, the table should be fully visible, while on small screens, it should have an internal scroll to ensure proper visibility of information. Refer to the attached images for visual reference._**

**Ans-** [Link](https://github.com/kumarsantosh3914/Placement-Assignement/tree/master/CSS-assignment/Assignment-3/Question10)