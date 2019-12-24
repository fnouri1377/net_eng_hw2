module.exports = [
    {
        "title": "Individual Characteristics Form 1",
        "id": "123",
        "fields": [
            {
                "name": "First_Name",
                "title": "First Name",
                "type": "Text",
                "required": true
            },
            {
                "name": "Last_Name",
                "title": "Last Name",
                "type": "Text",
                "required": true
            },
            {
                "name": "Age",
                "title": "Age",
                "type": "Number",
                "required": false,
                "options": [
                    { "label": "0-15" },
                    { "label": "16-30" },
                    { "label": "31-60" },
                    { "label": "61-100" }
                ]
            },
            {
                "name": "Birth_Date",
                "title": "Birth Date",
                "type": "Date",
                "required": false
            }
        ]
    },
    {
        "title": "Individual Characteristics Form 2",
        "id": "456",
        "fields": [
            {
                "name": "Name",
                "title": "Name",
                "type": "Text",
                "required": true
            },
            {
                "name": "Gender",
                "title": "Gender",
                "type": "Text",
                "required": false,
                "options": [
                    { "label": "Male" },
                    { "label": "Female" }
                ]
            }
        ]
    },
    {
        "title": "Individual Characteristics Form 3",
        "id": "789",
        "fields": [
            {
                "name": "Name",
                "title": "Name",
                "type": "Text",
                "required": true
            },
            {
                "name": "Age",
                "title": "Age",
                "type": "Number",
                "required": false,
                "options": [
                    { "label": "0-15" },
                    { "label": "16-30" },
                    { "label": "31-60" },
                    { "label": "61-100" }
                ]
            },
            {
                "name": "Country",
                "title": "Country",
                "type": "Text",
                "required": false,
                "options": [
                    { "label": "Iran" },
                    { "label": "Netherland" },
                    { "label": "Germany" }
                ]
            }
        ]
    },
]