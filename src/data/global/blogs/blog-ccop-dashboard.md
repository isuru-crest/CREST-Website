---
title: "CCOP Dashboard"
date: "2020-07-01 15:01:00"
author: "Nguyen Khoi Tran"
featured_image: ""
video_link: "null"
quote_author: "null"
quote_text: "null"
categories: 
    - research topic
    - cyber security
tags: 
    - Cyber Security
    - IT Services
format: "null"
type: "blog"
is_featured: true
main_content: "This is main content."
---


# CCOP Dashboard

CCOP Dashboard visualizes security metrics to provide executives a concise view of their organizations' security status. It shows high-level compound metrics to provide a quick overview and allows executives to inspect the components of these metrics should the requirement arises. 

Key requirements of this dashboard:

- The ability to display information at different levels and allow executives to switch between these levels at will. 
- The ability to customize the layout and content of the dashboard to suit the requirements of the organization. 

The ingestion, aggregation, and processing of data is out-of-scope of this CCOP dashboard, and will be handled in other parts of the CCOP project.

## Metrics

**Protection Score**

- Network Perimeter Protection Score
- End-point Protection Score
- Physical Access Control Score
- Human Security Score
- Core Network Vulnerability Control Score
- Core Network Access Control Score
- Data Protection Store

**Detection Score**

- Threat Awareness Score
- Threat Detection Score

**Response Score**

- Incident Response Score

**Business Impact of Cyber Events**

## Project Milestones and Deliverables

### Mock-up

**Time: 3/7/2020(Done)**

The Mock-up is a functional dashboard operating on mock-up data. It should be able to function as the provided specification. It is desirable that the mockup is available online to help our industry collaborators in understanding the idea and giving feedback for improvement. 

Next milestones are based on future discussions and feedback. 

## Technical Aspects

The dashboard should be built using Grafana. The main task of this project on the dashboard side would be to turn the graphical designs in the docs folder into dashboard hosted on Grafana. The Grafana should run in a container environment for ease of deployment and integration with other parts of the system. 

Grafana dashboards will draw data from an InfluxDB instance. Similarly to the Grafana, the InfluxDB should be hosted in a container environment. 


## Setup Steps
### Install grafana
Follow the offical instrustion to install grafana. 
https://grafana.com/grafana/download

### Install Pie Chart plugin
Follow the offical instrustion to install plugins.
https://grafana.com/grafana/plugins/grafana-piechart-panel

Note: If run grafana in a container, install the plugin at the same time starting the container.

```html

docker run -d \
-p 3000:3000 \
--name=grafana \
-e "GF_INSTALL_PLUGINS=grafana-piechart-panel" \
grafana/grafana

```

### Setup Data source
Add a new data source in grafana, choose TestData DB.

### Import JSON file
Import JSON file when adding panel, and choose the TestData DB data source.

