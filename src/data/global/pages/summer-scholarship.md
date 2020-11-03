---
title: "Summer Scholarship"
date: "2020-10-19 17:04:00"
author: "Owen Christ"
featured_image: "../../images/blog/blog-03-1170x600.jpg"
video_link: "null"
quote_author: "null"
quote_text: "null"
categories: 
    - Positions
    - Full time
tags: 
    - Summer Scholarship
    - Positions
format: "null"
type: "resources"
is_featured: true
---

**The Centre for Research on Engineering Software Technologies (CREST)**

[**http://crest-centre.net**](http://crest-centre.net/)

**Timeframe and duration – Nov 2020 – Feb 2021, 10-12 weeks, full time.**

**Scholarship amount – various with minimum $300 per week.**

**Contact persons: Dr Asangi Jayatilaka or Dr Mansooreh Zahedi**

**Expected years of student: completed year 3 or entering in year 3. Limited scholarships for students doing Masters degree are also available.**

###### Challenges Overview and Internal co-supervisors

| Challenge ID | Project name                                                                                     | Project | Supervisor Name      |
|--------------|--------------------------------------------------------------------------------------------------|---------|----------------------|
| **1**            | **Collaboration and Teamwork for CCOP**                                                              | **CCOP**    | **Asangi and Mansooreh** |
| **2**            | **AI-based Assistant for Executive Cyber Awareness**                                                 | **CCOP**    | **Ngyuen**               |
| **3**           | **Metric recommendation based on organizational needs**                                             | **CCOP**    | **Ngyuen and Chandi**        |
| 4            | Containerized application live updating with network-level services                              | Pokaps  | Mobin                |
| 5            | Towards Configurable Vulnerability Assessment in Docker Containers                               | Pokaps  | Victor and Mobin         |
| 6            | Automatic coordination of software security patch management                                     | Pokaps  | Nesara               |
| 7            | Dependency analytics in software security patch management                                       | Pokaps  | Nesara               |
| 8            | Blockchain-based Tool for Security Patching Lifecycle Management                                 | Pokaps  | Auffef               |
| 9            | Automated security assessment for interconnected systems                                         | C3i     | Faheem               |
| 10           | Log file analysis and visual feedback generator                                                  | C3i     | Faheem               |
| 11           | Security database mapping for meaningful mitigation                                              | C3i     | Faheem               |
| 12           | Modelling Security Operations Activities for Securing C3I Systems                                | C3i     | Ali                  |
| 13           | Evaluation of Tool Support for Security by Design of C3i Software Systems                        | C3i     | Ali                  |
| 14           | Resilience and Security of Command and Control infrastructure for C3i Systems                    | C3i     | Faheem and Nguyen    |
| 15           | Protecting software-deﬁned enterprise networks  of a C3I system from packet injection Attacks    | C3i     | Faheem and Nguyen        |

**All the project are supervised by Ali, Asangi, and Mansooreh.**




**Challenge #1: Collaboration and Teamwork for CCOP**

Common Operational Pictures (COPs) have been used in the military domain as a powerful tool for gaining Situational Awareness (SA) and thus enabling appropriate decision-making in moments of crisis or attacks. Today, SA is also an essential part of the cybersecurity operations of many organisations, but particularly for Critical Infrastructures (CIs) and national agencies. A number of solutions have been proposed to enhance Cyber Situational Awareness (CSA) by means of Cyber Common Operational Pictures (Cyber COPs). A COP is defined as &quot;a single identical display of relevant information shared by more than one command that facilitates collaborative planning and assists all echelons to achieve situational awareness&quot;.

Complete cyber situation awareness is implausible to achieve through interactions only between an individual analyst and their technology.  Achieving complete situation awareness requires members of different teams and different organisational positions, working across different work shifts to collaborate and share information with each other. Often each team member will have different, though perhaps overlapping, perspectives and hypotheses on the situation. In a complex and dynamic world, it is likely that two or more such perspectives will need to be combined to obtain complete SA that extends beyond a single analyst&#39;s knowledge. Unfortunately, there is a lack of technologies conducive to humans to collaborate, effectively communicate, and share information and knowledge with each other in the context of CCOP and CSA. The project&#39;s main aim is to enable people from different organisational teams and levels to share their knowledge and perspective in order to:

1. collaboratively analyse alerts and observations related to the CCOP dashboard and;
2. collectively make actionable decisions.

The expected outcomes for this research challenges are:

1. Develop a functional prototype of this concept.
2. Make the prototype usable for getting feedback from users on ways to improve the workflow and to identify additional requirements.

**Challenge #2: AI-based Assistant for Executive Cyber Awareness**

Cyber Common Operating Picture (CCOP) comprises a set of metrics, coming from different security intelligence sources. One of the current means of displaying a CCOP is executive dashboards, which were carefully designed to display the right kind of metrics at an appropriate level of detail. While these dashboards can be tailored to individual organizations, or even individual executives, they can only narrow down the available information of the CCOP to a more manageable level instead of providing the very specific information that executives seek within a specific context. Moreover, when using these dashboards, executives need to examine and analyze the security status details themselves instead of having an assistant to offer them what they need and useful recommendations for making security decisions.

This research activity will explore the ways we can apply semantic modelling, logic reasoning, and information retrieval technique to retrieve and return the precise information that executives need within a context.

The key outcomes of will be:

1. Develop a mechanism to understand natural language requests from executives and return an appropriate set of information from the CCOP model that satisfies the request.
2. Integrate this mechanism into an open-source voice assistant platform such as Mycroft AI, Open Assistant, LinTO, Leon, etc.

**Challenge #3: Metric recommendation based on organizational needs**

Cyber Common Operating Picture (CCOP) comprises security metrics that reflect the cyber-health of an organization with respect to its historical performance and the industry standard. These metrics are generated from various sources of security intelligence, such as reports from security tools (e.g., SIEM, IDS, firewalls) as well as external intelligence sources (e.g, Open-source intelligence, vulnerability registries). Each organization has different level of access to these sources. Moreover, they have different requirements in terms of the metrics to be included in the CCOP and the relative importance of these metrics.

Given the large number of metrics that can be used for CCOP, it is difficult for organizations to map their current capabilities, in terms of the security intelligence sources that they have, to the metrics. Moreover, the requirements of an organization might simply be insatisfiable given their existing capability. Thus, the organization needs recommendations on either extending their capability or modifying their requirements. A CCOP-specific recommendation system that can solve this problem does not exist.

This research activity aims at applying Artificial Intelligence (AI) techniques, such as semantic reasoning and collaborative filtering, to develop a recommendation mechanism that matches organizations with the right metrics in the CCOP model and provides suggestions about extending capabilities or modifying requirements.

The expected outcomes will be:

1. An AI-enabled prototype tool for providing organizational specific security metrics recommendation services that would become part of the CCOP platform

**Challenge #4: Containerized application live updating with network-level services**

Software live updating can occur at different granularity, such as instruction-level, function-level, process-level, etc. This research challenge will focus on container-level software updating. Minimising or completely eliminating service downtime associated with vulnerable container updating is necessary for highly critical applications. An automated and transparent way to manage run-time updating of vulnerable containers would be beneficial for such critical environments. Traditional container updating approach involves multiple steps. Namely, a) stopping the existing vulnerable container, b) preparing a new updated/patched container, c) starting the newly created container. However, with the growth of modern software in terms of size and complexity leads to increased container creation and preparation times. Thus, in order to minimise the downtime of the service provided by a container, this research effort would focus on investigation of seamless downtime-free client migration from vulnerable to updated containers.

The expected outcomes for this research challenges are:

1. A prototype tool for managing dynamic container updates at the network level.

**Challenge #5: Towards Configurable Vulnerability Assessment in Docker Containers**

Security is considered as one of the most challenging factors for migrating Small and mid-size enterprises (SMEs) services and applications to the cloud (containers). SMEs employ one or more open-source tools without properly configuring them to fit in appropriate context. This results in several issues: 1) waste of computing resources, 2) improper accuracy in vulnerability detection, 3) misidentification of security events. This challenge aims to explore the potential of multi-tools approach on vulnerability assessment of virtualised infrastructure.

The planned activities and deliverables are:

1. Exploring the strengths and weaknesses of the performance and accuracy of existing vulnerability scanning tools in the context of containers.
2. Identifying and using mechanisms for integrating and orchestrating various existing container security tools into a coherent container security enabling flow.
3. Developing a multi-tools approach for automatically detecting vulnerabilities and configuring Docker containers.

**Challenge #6: Automatic coordination of software security patch management**

Keeping machines up to date by applying the critical security patches on time is critical security hygiene. Enterprise software security patch management involves the process of applying security patches to large and complex organization systems, which is a challenging task. The dynamic and collaborative nature involving multiple stakeholders at different stages of the process create further difficulties in patch management tasks.  Efficient coordination of the tasks with multiple stakeholders of conflicting interests is a daunting task that could easily be neglected because of the inherent complexity and lack of technological support yet a critical success factor to security patch management. A typical manual approach to this problem would use discussion with several stakeholders to argue the different considerations and reach a consensus. This research challenge will analyse the activities, tasks, and artefacts generated and shared for supporting coordination of security practitioners for security patch management tasks in large and complex organizations. Then the research activities will identify the needs of automating the coordination tasks for better and timely decision making by the relevant stakeholders in the following areas:

1. collaboratively analyse alerts related to patch application;
2. gain and share situational awareness of the context of the patch being applied and;
3. collaboratively make actionable decisions

The task/expected outcome is to:

1. Develop a prototype tool for improving automation support of coordination in software security patch management process.

**Challenge 7#: Dependency analytics in software security patch management**

Timely security patch installation in organizations is often impeded by the necessity to manually test and install patches to avoid the risks of unexpected system breakdowns caused by faulty and malicious patches. These manual tasks are often associated with misconfiguration and erroneous responses and consume a significant amount of time and human effort. Dependency and compatibility concerns cause severe problems for automation in these security patch management tasks. The challenge is to utilize AI capabilities to assess patch dependencies and visualize the results to investigate the pre-requisites for patch application and identify any particular outliers (missing patches/patch information) that would streamline the patching workflow and assist practitioners in decision-making for timely patch installation.

The expected deliver is:

1. A ML-based approach and prototype tool for automatically track and visualise the patch dependencies for supporting patching decisions.

**Challenge #8: Blockchain-based Tool for Security Patching Lifecycle Management**

Software security patching plays a critical role in thwarting cyber security attacks. A security patch involves a change applied to the software code to correct the security weakness discovered by a vulnerability. Software security patch lifecycle management refers to the application process of security patches to address the identified security vulnerabilities in the software code. Enterprise security patch management involves the process of applying security patches to large and complex organization systems with hundreds of servers, multiple operating systems, and heterogeneous applications, all interconnected through networking devices which is a challenging task. It important to have an automatic and trustworthy support infrastructure for the activities and artefacts of the software security patch lifecycle management.

This research challenge is aimed at exploring the suitability and viability of leveraging distributed ledger technologies to automate the process of software patch management in mission critical system, e.g., industrial control systems or healthcare systems. The research activities will design and implement a prototype for a blockchain enabled tool for supporting the software security patch lifecycle management.

The expected deliver is:

1. A blockchain-enabled App for managing security patches from generation to application

**Challenge #9: Automated security assessment for interconnected systems**

Modern command, control, and communication systems are highly interconnected supported by advanced networks and Internet of Things (IoT). The hypberconnectivity of the such systems and the software underpinning exposes them to a large number of security vulnerabilities, which leads to an increase in the volume and sophistication of cyberattacks. These attacks potentially disrupt the cyber safety and operation of many organisations and enterprises with millions of users. Assessment of these cyber risks is important to prioritise to fix the ones that would have the highest impact on a system. The current techniques are mostly expert-based with manually crafted rules, and thus do not scale well to new vulnerabilities. The proposed research challenge aims to automate the security assessment process using Artificial Intelligence enabled technologies. The envisioned solution will support evaluation-based security modelling to analyse vulnerabilities in complex and dynamically changing computer systems and interconnected networks.

The expected deliverables of the project are:

1. Enrichment of graphical security models with a variety of security metrics extracted from software vulnerability assessment
2. Automated security analysis of the interconnected systems using a combination of machine learning-driven software vulnerability assessment and graphical security modelling techniques

**Challenge #10: Log file analysis and visual feedback generator**

Command, control, and communication systems are considered a type of Systems-of-Systems (SoS). Such systems are complex distributed and concurrent systems, bring many benefits, but also raise many security challenges. With the scalability and robustness characteristics, these systems are widely deployed to support mission critical processes and business functions such as search and rescue tasks, smart buildings, health care and transportation. However, heterogeneity, highly distribution and emergent behaviours of SoS also significantly increase their exposure to a large number of security vulnerabilities. A vulnerability in an individual constituent system (CS) usually makes that CS the weakest link for the whole SoS in cae of cascading attack resulting from the interactions among the CSs. Moreover, SoS modification and vulnerability mitigation would be expensive when a system becomes mature. Thus, the security solution at the early stage becomes a critical challenge. To address this problem, our research has introduced a model-driven based method for designing and analysing security of Systems-of-Systems Security (SoSSec). The proposed research challenge will provide a tool support for automatically analyse and visual the log files generated based on the security model developed using the SoSSec. The envisioned automated analysis/visualisation tool will make the security vulernability models easy to understand for system designers.

The deliverables for addressing this challenge are:

1. Automatically analyse the log file of execution/simulation results and extract the information, such as agents (CS), vulnerabilities, pre and post-conditions, and interactions/messages of the agents.
2. Generate visual feedback by drawing the cascading attack diagram using model driven engineering techniques.

**Challenge #11: Security database mapping for meaningful mitigation**

When a vulnerability is found, the security architects need to take necessary actions to mitigate the attacks. To fix the system vulnerability, the architects need to know the root and the reason for the problem. Therefore, weaknesses and attack patterns can be employed to explore system vulnerabilities. With this information, the proposed security solutions and patterns can be provided to the architects as a guideline and references. This project explores the relationship between the vulnerabilities and weaknesses of the SoS, attack patterns, and potential mitigations. Based on the proposed mitigations, systems can return the security solution suggestions.

The expected outcomes for addressing this challenge will be:

1. ML/NLP techniques for automatically linking the relevant CVE, CWE, CAPEC and security centric patterns.
2. A web-based system to visual the mapping for support designers in understanding and mitigating security vulnerabilities by suggested the relevant security patterns.

**Challenge #12: Modelling Security Operations Activities for Securing C3I Systems**

Command, Control, Communication, and Intelligence (C3i) system is a kind of System of Systems (SoS) that is increasingly leveraging ICT infrastructures. As C3I systems are becoming more pervasive in military and police organizations, there is a high risk of cyber-attacks on these systems. Given that it is inevitable that a cyber-attack will happen at one stage or another, it is important to be ready for promptly responding to the attack. This research challenge aims at modelling the security operational activities of C3i systems. The modelling will underpin the identification of the response activities that is how the C3i system will response when it is under an attack. Such modelling will greatly benefit the designer of C3i system in determining, planning, and testing the response of C3i system to various kinds of attacks right at the design stage of the system. The proposed work will leverage semantic modelling, natural language processing, and model-driven engineering for the identification and modelling of the features of the plan to respond to an attack.

The expected outcome for addressing this challenge will be:

1. A prootype tool and report for modelling the security operational activities.

**Challenge #13: Evaluation of Tool Support for Security by Design of C3i Software Systems**

This research action will carry out a preliminary study of the available tools and approaches for building a Design Space for supporting security by design paradigm for next generation smart command, control and communication systems. Such design space is needed for building and/or improving organizational and individuals&#39; competencies in embedded security by design paradigm in the design and evaluation phases of large-scale mission- and business-critical software intensive services. The research activities will identify and critically analyse the available security modelling and analysis tools for the access and provision of an integrated body of knowledge consisting of design principles, guidelines, patterns, reusable meta-models, and artefacts for designing and evaluating secure C3i systems. The research activities will also focus on the collaborative capabilities and activity-based provision of the required security knowledge to the stakeholders involved in the design and analysis activities. One important aspect of the evaluation will be the available decision making support for identifying, considering and incorporating security centric approaches. The evaluated tools will also be reviewed for their abilities for customization to individual knowledge and preferences and the total cost of ownership.

The expected outcome from this research action will be:

1. A report on the evaluation of tools supporting collaborative activity-based security by design for C3i systems.

**Challenge #14: Resilience and Security of Command and Control infrastructure for C3i Systems**

This research activity will focus on adopting and applying resilience and security methodologies for command and control infrastructure for collaborative autonomous systems and collaborating autonomous robots. The research would focus on exploring resilience and security in the following aspects. (i) Planning mission strategies when some of the command and control (master), or slave nodes (robots) fail. (ii) Configuring new command and control cluster nodes when some of the operational nodes fail. (iii) Establishing alternative communication channels if some or all of the communication channels fail. (iv) Restoring to original system operational state with new data when optimal systems configuration is reestablished. (v) Optimising task assignment when command and control services are reestablished. (vi) Exploring and adapting consensus based protocols and leader selection algorithms to find optimal decision making strategies.

The expected outcome from this research would be:

1. Identification and implementation of algorithms for the above mentioned use cases that can work on a cluster of edge and cloud nodes.
2. Develping optimisation strategies for performing online and offline computing to make global and local decisions based upon available data.
3. Implement the strategies on autonomous robots e.g., TurtleBots.

**Challenge #15: Protecting software-deﬁned enterprise networks of a C3I system from packet injection Attacks**

The networking architecture of the software-deﬁned network (SDN) employed in a C3I infrastructure makes it easy to target the packet injection attack. The attacker can affect the services and performance of the SDN controller and can overﬂow the capacity of the SDN switch devastatingly, by injecting the malicious packets into the SDN network. That ultimately stops the network functioning in real-time, leading to the situation of network breakdown. Thus, the packet injection attack is a primary threat to the software-deﬁned enterprise network of a C3I infrastructure, in which continuous connectivity and real-time network functioning are two essential requirements.

In this project, we will design and implement a packet injection attack&#39;s mitigation technique that will detect and immediately block the malicious data packet ﬂow at the gateway switch of the software-deﬁned enterprise network of a C3I infrastructure. In our project, we want to guarantee that the core network does not stop functioning due to the packet injection attack. We want to shift the computational functionality of the controller to the edge switch, using the P4 based implementation, to thoroughly reduce the workload of mitigating the edge controller&#39;s packet injection attack.

The outcomes of this project will be a software/tool and research paper that will protect software-defined enterprise network from the packet injection attack.


##### For further information

For a confidential discussion regarding to the positions, contact:

Professor Ali Babar

Email:<ali.babar@adelaide.edu.au> 

Dr. Asangi Jayatilaka

Email:<asangi.jayatilaka@adelaide.edu.au> 

Dr. Mansooreh Zahedi

Email:<mansooreh.zahedi@adelaide.edu.au>