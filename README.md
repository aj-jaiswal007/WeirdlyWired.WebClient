# Weirdly Wired Chat

A funny project came to my mind, just trying to convert that idea into reality.

## Demo

![](weird_demo.gif)

Update [29th Match 2024]
Message conversion is hardcoded as follows in this demo, The idea is to do it via LLM Calls with different personas.
Following mapping was used, this will eventually replace an LLM text-to-text API call.

```python
{
    "hey": "Yo bossman!",
    "hello": "Wassup dawg!",
    "how are you?": "Watchu cookin homie?",
    "i am making eggs": "I'm cooking meth bruh!",
}
```

## Backend

Backend code at [link](https://github.com/aj-jaiswal007/WeirdlyWired.CoreAPIs)
