Exercise_11
===========

## JQuery UI & Widgets

Practice using libraries, looking up documentation, and referring to api.  
Work with forms and form fields.

**First import the JQueryUI library**  

Add all of your markup and components to **#ex11_container**

1. Put the sidebar links (into an **Accordion**
    - use "No Auto Height"
2. Put the content into **Tabs**  
    - Enlightenment
    - About
    - Participation
    - Benefits
    - Requirements
3. Add a button labeled "Contact Us"  
    - The button uses a *Mail* icon
4. Clicking on the "Contact Us" button will launch a **Dialog** (type: Modal Form)  
    - The contents of the **Dialog** is a *Contact Form*  
    - *&#42;bonus, use an animation to display the dialog*
5. The *Contact Form* includes the following form fields  
*note:* Each form field must also have an accompanying **label**  
    - name
        - Text
    - age
        - Use the **Slider** component ( use any variation of it that you want )
    - message
        - Textarea
    - delivery_date
        - **Datepicker**
            - use animations
            - show month and year menus
            - show dates in othe months
    - submit
      - **Button**

6. The Submit button sends a POST request of the form fields to http://167.216.21.29/ *[your name]*

7. Add a **Tooltip** to the *Submit* button that says "This form will be posted to Jon's server"

8. Add an **Autocomplete** behavior to the *Name* field, using all of the names of the students of the class.

