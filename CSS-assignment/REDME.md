## CSS Assignment 

**_Q.1 What Box Model in CSS & Which CSS Properties are part of it ?_**

**Ans-** The box model is a fundamental concept in CSS that describes how elements are rendered and how their dimensions are spacing are calculated. It consists of four main components: content, padding, border, and margin. Each component contributes to the overall size and layout of an element.

_The CSS properties that are part of the box model are:_

Content:
-  width: Specifies the width of the element’s content area.

-  height: Specifies the height of the element’s content area.

Padding:

- padding-top, padding-right, padding-bottom, padding-left: Specifies the space between the element’s content and its border.

Border: 

-  border-width: Specifies the width of the element's border.

- border-style: Specifies the style of the element’s border (eg: solid, dashed, etc).

- border-color: Specifies the color of the element’s border.

- border-radius: Specifies the roundedness of the element’s corners.

Margin: 

- margin-top, margin-right, margin-bottom, margin-left: Specifies the space between the element and its neighbouring elements.

**_Q.2 What are the Different Types of Selectors in CSS & what are the advantages of them?_**

- Element Selector —> e.g: p selects all `<p>`
Class Selector —> e.g: my-class 

- ID Selector —> e.g: #my-id (select the element with the ID “my-id”)

- Pseudo-classes and - Pseudo-elements —> e.g: “:hover” selects an element when it is being hovered over, “::before” selects the content before an element.

_The advantages of using different types fo selectors include:_

- Specificity
- Reusability
- Targeting flexibility
- Style isolation
- Modularity

**_Q.3 What is VW/VH & How its different from PX?_**

**Ans-** 
VW(viewport width) and VH(viewport height) are units of measurement in CSS that are relative to the size of the viewport, which is the visible area of a web page.

-  VW(Viewport Widht): 1vw is equal to 1% of the viewport’s width
- VH(Viewport Height): 1VH is equal to 1% of the viewport’s height.

_The main difference between VW/VH and PX(pixels) is how they are calculated and how they respond to changes in viewport size._

- PX(pixels) are fixed units of measurement that represent an absolute length on a screen. They do not change based on the viewport size. For example, if you set an element’s width to 200px pixels, it will always have a width of 200 pixels regardless of the viewport size.

**_Q.4 Whats difference between Inline, Inline Block and block?_**

**Ans-** The difference between inline, inline-block, and block display properties in CSS are as follows:

1. Inline: 

- Inline elements do not start on a new line and only take up as much horizontal space as necessary.

- They cannot have explicit width and height values.
- Margin and paddings only affect the left and right sides, not the top and bottom.
- Examples of inline elements includes `<span>`, `<a>`, `<strong>`, `<em>` etc.

2. Inline-block: 

- Inline-block elements are similar to inline elements in that they do not start on a new line.
- They can have explicit width and height values, and other block-level properties like margins and paddings.
- Inline-block elements respect top and bottom margins and paddings.
- Examples of inline-block elements includes `<img>`, `<input>`, `<button>` etc.

3. Block: 

- Block elements start on a new line and occupy the full width available.
- They can have explicit width and height values and occupy their own space within the layout.
- Block elements can have margins, paddings, and borders applied to all sides.
- Examples of block elements include `<div>`, `<p>`, `<h1>` to `<h6>`, `<ul>`, `<li>` etc.

**_Q.5 How is Border-box different from Content Box?_**

**Ans-** The box-sizing properties in CSS controls how the width and height of an elements are calculated, affecting the overall size of the box. There are two possible values for the box-sizing property: content-box and border-box.

1. Content-Box:

- The default value of ‘box-sizing’.
- The width and height of an element are calculated by considering only the content area.
- Any padding and border added to the element are in addition to the specified width and height.
- In other words, the width and height represent the content area only.

2. Border-Box: 

- When box-sizing: border-box is applied to an element, the width and height values includes the content area, padding, and border.
- The specified width and height are treated as the total width and height of the element, including its content, padding, and border.
- The content area will shrink or expand to accommodate the padding and border without changing the specified width and height.

**_Q.6 What’s z-index and How does it Function ?_**

**Ans-** The z-index property in CSS controls the stacking order of positioned elements on the z-axis, which determines the order in which elements are stacked or layered on top of each other in a web page. It is used to control the visibility and overlapping of elements.

_Here’s how z-index functions:_

- Stacking Context
- Stacking Order
- Stacking Context Hierarchy

*Here’s an example of how to use the z-index property:*

```
.element1 {
  position: relative;
  z-index: 2;
}

.element2 {
  position: relative;
  z-index: 1;
}

```

**_Q.6 What’s Grid & Flex and difference between them?_**

**Ans-** Both CSS Grid and Flexbox are layout systems in CSS that allow for the creation of responsive and flexible web layouts.

CSS Grid: 

- Grid is a two-dimensional layout system that allows you to define rows and columns to create complex grid-based layouts.

- It enables you to divide a webpage into a grid of cells and position elements within those cells.

- Grid provides precise control over the placement and sizing of elements, making it suitable for creating complex and grid-like layouts.

- It allows you to align elements both horizontally and vertically, control the sizing of rows and columns, and easily create responsive layouts.

- Grid is best suited for overall page layout design and arranging elements in a grid-like structure.


Flexbox: 

- Flexbox is a one-dimensional layout system that focuses on arraning elements in a single row or column.

- It provides a flexible way to distributed space and align elements within a container.

- Flexbox is well-suited for creating flexible and dynamic layouts, especially for building components and arranging elements in a linear flow.

- It allows you to easily control the alignment, order, and size of elements withing a container.

_The key difference between CSS Grid and Flexbox are:_

- CSS Grid is a two-dimensional layout system, while Flexbox is a one-dimensional layout system.

- Grid is best for complex grid-like layouts, while flexbox is ideal for arranging elements in a linear flow.

- Grid provides precise control over rows, columns, and grid cells while Flexbox focuses on distributing space and aligning items within a container.

- Grid is suitable for overall page layout design, while flexbox is useful for component-level layout and responsiveness.

**_Q.7 Difference between absolute and relative and sticky and fixed position explain with
Example._**

1. Absolute Position: 

- An element with absolute position is positioned relative to its closest positioned ancestor
- It is taken out of the normal flow, meaning other elements will ignore its space.
- Absolute positioning allows you to precisely position an element using top, right, bottom, and left properties.
- If no positioned ancestor is found, the element will be positioned relative to the initial containing block(usually the viewport).

- Example: 

```
<div style="position: relative;">
  <div style="position: absolute; top: 50px; left: 50px;">Absolute Position</div>
</div>

```

2. Relative Position: 

- An element with relative position is positioned relative to its normal in the document flow.
- It doesn’t affect the position of other elements.
- Relative positioning allows you to move an element relative to its normal position using top, right, bottom, and left properties.

- Example: 

```
<div style="position: relative;">
  <div style="position: relative; top: 20px; left: 20px;">Relative Position</div>
</div>
```

3. Fixed Position: 

- An element with fixed position is positioned relative to the viewport (the browser window), and it remains fixed even when the page is scrolled.
- Fixed elements are removed from the normal flw and don’t affect the position of other elements.
- Fixed positioning allows you to create elements such as headers or navigation bars that stay in a fixed position on the screen.

- Example: 

```
<div style="position: fixed; top: 0; left: 0;">Fixed Position</div>
```

4. Sticky Position: 

- An element with sticky position is positioned based on the user’s scroll position. It acts like a combination of relative and fixed positioning.

- Initially, the element is positioned relative to its normal position in the document flow. However, as the user scrolls, it “sticks” to a specific position relative to the viewport.

- Sticky positioning is useful for creating elements that are initially within                    the flow but become fixed or sticky as the user scrolls.

**_Q.8 Build Periodic Table as shown in the below image._**

**Ans-** [Click Me](https://github.com/kumarsantosh3914/Placement-Assignement/tree/master/CSS%20assignment/css%20q8)

**_Q. 9 Build the given layout using grid or flex see the below image for reference._**

**Ans-** [Click Me](https://github.com/kumarsantosh3914/Placement-Assignement/tree/master/CSS%20assignment/css%20q9)


**_Q.10 Build Responsive Layout both desktop and mobile and Tablet, see below image for
reference._**

**Ans-** [Click Me](https://github.com/kumarsantosh3914/Placement-Assignement/tree/master/CSS%20assignment/css%20q10)


