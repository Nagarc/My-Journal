# When Ghost Islands Get Tariffs: A Wake-Up Call for Data Governance  
*By Nagarjuna C | Enterprise Data Architecture, Data Strategy*

---

### Introduction  
Recent U.S. tariffs applied to remote, uninhabited places like Norfolk Island and Heard and McDonald Islands raised eyebrows—no population, no exports, yet tariffs applied. This curious case exposes how **bad data meets broad policy** and highlights the strategic nature of data governance.

![Data Governance](images/datagov.png "Data Governance")
---

### The Curious Case: How Do You Tariff an Empty Island?

Two main issues emerged:  
1. **Misclassified Origins**  
   Shipping records falsely listed remote islands as the origin for goods that actually came from the U.S. or UK. Automated systems blindly accepted this bad data without validation or exception handling.  

2. **Blanket Policies with No Filter**  
   Tariffs applied universally without nuance, even to regions with no trade or population. Policies lacked flexibility, relying on incomplete data.

---

### Lessons on Data Governance

This situation reflects common organizational challenges with automated decisions based on shaky data and inflexible policies.

#### 1. Accuracy Isn’t Optional  
- Small mislabels (e.g., supplier codes, origin countries) can cause costly customs delays, fines, and compliance risks.  
- **Action:** Conduct regular data audits and apply validation tools to catch red flags early.

#### 2. Policies Need Data-Driven Design  
- Blanket policies on poor data create confusion and unintended noncompliance.  
- **Action:** Build policies using real-world data, including edge cases, and design systems to adapt as data improves.

#### 3. Silos Turn Small Errors Into Big Problems  
- Lack of integration between shipping, trade, geographic, and compliance data prevented detecting the obvious data mismatch.  
- **Action:** Invest in integrated systems to provide a unified view with layered policy logic.

---

### Recommendations for Organizations  

- Promote cross-team collaboration between typically siloed functions such as legal, compliance, sourcing, and operations.  
- Implement high-level trade data dashboards and heatmaps to detect outliers quickly.  
- Develop governance strategies that anticipate exceptions and anomalies before policy rollouts.

---

### Final Thoughts: Good Governance Means Better Resilience  

- Resilient data systems don’t just automate; they **ask better questions**.  
- Cross-functional visibility is a safeguard, not a luxury.  
- Perfect data is unrealistic, but plans for handling imperfect data are essential.

---

### Data Health Metrics to Monitor  
- **Origin data consistency:** Are shipping origins consistent with trade routes and supplier info?  
- **Exception rates in shipping codes:** Frequency of manual flags or corrections.  
- **Anomaly detection coverage:** Percentage of geographic or trade mismatches caught.  
- **Policy rule exceptions:** Updating policies for edge cases (e.g., non-commercial or empty regions).

---

### About the Author  
Nagarjuna C specializes in Enterprise Data Architecture, Data Strategy, Cloud Migration, Data Governance, and Consulting with TOGAF certification.

[When Ghost Islands Get Tariffs: A Wake-Up Call for Data Governance](https://www.linkedin.com/pulse/when-ghost-islands-get-tariffs-wake-up-call-data-governance-c-fw8le/?trackingId=5CD7hrs9taEAVVY%2BNUsapQ%3D%3D)

---

*This analysis highlights strategic considerations in data governance using a real-world trade scenario as an example.*

