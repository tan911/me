---
layout: ../../../layouts/MarkdownLayout.astro
title: "The Job is to limit the request"
pubDate: 2023-08-28
description: ""
author: "Jovan Lanutan"
tags: ["blogging", "Redis", "Caching"]
---

When I was working as a junior full-stack web developer, I remember one of my tasks was to create a base website with a system that hydrates its content _(both written in [*Vue*](https://vuejs.org/))_. You can think of this system as a kind of content management. My boss asked me to make the website’s content dynamic based on data from external API services we subscribe to. I managed to achieve this, though initially, it was implemented on the client side in a somewhat inefficient way.

## The Problem: Rate Limit Nightmare

The main problem I encountered was the API rate limits. Like most APIs, each has restrictions on the number of allowed requests. For example, if the provider limits us to 500 requests per month, exceeding this limit results in errors, effectively blocking us from further access. Even on our own server, we implement similar functionality to enhance our system's security. Now, imagine we have 500 visitors to the website in a single day, and each page refresh counts as a separate request—that limit could easily be reached within a day.

## A First Attempt: Moving to the Server

My boss wanted a solution to avoid exhausting our requests so quickly, so I decided to move the code to the server side _(the system that adds content to the base website)_. Unfortunately, the same issue remained: every time a request hit the server, it would immediately make a request to the external API, then send the response back to the client. This setup still led to rapid consumption of our allowed API requests.

## Discovering the Magic of Caching

After researching potential solutions, I came across the concept of caching. In simple terms, caching is like temporarily saving information so it can be quickly accessed later without having to go back to the original source every time. Imagine a frequently used recipe you keep in your kitchen instead of looking it up in a cookbook each time—caching works the same way. It stores data in a "quick-access" place to speed things up and reduce the need to fetch it repeatedly. I checked our available tools and technologies and eventually found [Redis](https://redis.io/). After discussing it with colleagues and conducting further research, I decided it could be a good fit for my needs.

## The Solution: Caching with Redis

To address the problem, I set up Redis to cache responses from external API services and implemented logic to make a request every six hours. This reduced the number of requests to just four per day, totaling about 124 requests per month, making it feasible to stay within the 500 requests-per-month limit. How does this work? When the client _(the base website)_ makes a request to the server, the server retrieves the data directly from Redis and sends it back to the client without automatically making a request to the external API.
