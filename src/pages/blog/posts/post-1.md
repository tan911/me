---
layout: ../../../layouts/MarkdownLayout.astro
title: "The Job is to limit the request of every page refresh"
pubDate: 2023-08-28
description: ""
author: "Jovan Lanutan"
tags: ["blogging", "Redis", "Caching"]
---

I work as a junior full-stack developer, and one of my tasks was to create a base website with a system that hydrates content on the page. You can think of it as a kind of content management system. My boss asked me to make the content dynamic based on data from external API services to which we subscribe. I managed to do this, though initially, it was implemented on the client side in a somewhat inefficient way.

### The Rate Limit Nightmare

The main problem I encountered was the API rate limits. Like most APIs, each has limitations on the number of requests allowed. For example, if the provider limits us to 500 requests per month, exceeding this limit results in errors, effectively blocking us from further access. Now, imagine we have 500 visitors to the website in one day, and each page refresh counts as a separate request—that limit could easily be hit in a single day.

### A First Attempt: Moving to the Server

My boss wanted a solution to avoid exhausting our requests so quickly, so I decided to move the code to the server side. Unfortunately, the same issue remained: every time a request hit the server, it would immediately make a request to the external API, then send the response back to the client. This setup still led to rapid consumption of our allowed API requests.

### Discovering the Magic of Caching

After researching potential solutions, I came across the concept of caching. I checked our available tools and technologies, Eventually, I found Redis and, after discussing it with colleagues and doing further research, decided it could be a good fit for our needs.

### The Solution: Caching with Redis

To address the problem, I set up Redis to cache the responses from external API services every six hours. This way, I reduced the number of requests to just four per day, totaling about 124 requests per month. By doing this, staying within the 500 requests-per-month limit became feasible.
