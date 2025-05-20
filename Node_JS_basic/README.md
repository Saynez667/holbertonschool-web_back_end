# 🌐 Web Infrastructure Design Project

**Design & optimize modern web infrastructures**  
*A Holberton School project covering server architecture, redundancy, security, and scaling*

![Infrastructure Diagram](https://via.placeholder.com/800x400.png?text=Sample+Infrastructure+Diagram)

## 📚 Learning Objectives
✔️ Design **LAMP stack** architectures  
✔️ Implement **load balancing** & **high availability**  
✔️ Configure **HTTPS** & **firewall** security  
✔️ Set up **monitoring** & **metrics collection**  
✔️ Understand **database replication** strategies  
✔️ Eliminate **SPOF** (Single Points of Failure)

---

## 🛠️ Project Tasks

### 0. Simple Web Stack ([0-simple_web_stack](web_infrastructure_design/0-simple_web_stack))
**Components**:  
- 1 Server (8.8.8.8)  
- 🐧 LAMP Stack (Linux, Apache/Nginx, MySQL, PHP/Python)  
- 🌍 Domain: `www.foobar.com` (A record → 8.8.8.8)

**Key Explanations**:  
- **DNS Role**: Translates domain to IP (🔗 `www` = CNAME/subdomain)  
- **Web Server**: Serves static content (Nginx)  
- **App Server**: Processes dynamic requests  
- **Database**: MySQL for data storage

**Issues**:  
❗ Single Point of Failure (SPOF)  
❗ No scaling capacity  
❗ Downtime during maintenance

---

### 1. Distributed Infrastructure ([1-distributed_web_infrastructure](web_infrastructure_design/1-distributed_web_infrastructure))
**Components**:  
- 🔄 HAProxy Load Balancer  
- 2 Web/App Servers  
- 🗃️ MySQL Primary-Replica

**Key Features**:  
- **Load Balancing**: Round Robin algorithm ↔  
- **Active-Active**: Both servers handle traffic ↔  
- **DB Replication**: Async data sync (Primary → Replica)

**Issues**:  
🔓 No HTTPS/TLS encryption  
🚨 No firewall protection  
📊 Missing monitoring

---

### 2. Secured & Monitored Infrastructure ([2-secured_and_monitored_web_infrastructure](web_infrastructure_design/2-secured_and_monitored_web_infrastructure))
**Enhancements**:  
- 🔒 3 Firewalls (UFW)  
- 📜 SSL Certificate (Let's Encrypt)  
- 👀 Monitoring: Sumo Logic agents

**Key Configurations**:  
- **HTTPS**: TLS 1.3 encryption 🔐  
- **Monitoring**: Track QPS, uptime, errors  
- **Security**: Port filtering (443/80 only)

**Issues**:  
⚠️ SSL Termination at LB risks decrypted traffic  
⚠️ Single writable MySQL node  
🔄 Identical server components

---

### 3. Scaled Infrastructure ([3-scale_up](web_infrastructure_design/3-scale_up))
**Optimizations**:  
- 🚀 Horizontal Scaling: Add 1 server  
- 🧩 Component Separation:  
  - Dedicated web/app/db servers  
- 🔄 HAProxy Cluster: Active-Passive

**Benefits**:  
- 📈 Handle 2x traffic load  
- 🔋 Redundant components  
- 🛡️ Isolate failures

---

## 🔍 Key Concepts
| Term          | Explanation                          |
|---------------|--------------------------------------|
| **SPOF**      | Component whose failure crashes system |
| **QPS**       | Queries Per Second (throughput metric) |
| **Active-Active** | All nodes handle traffic simultaneously |
| **Primary-Replica** | DB write → Primary, read → Replicas |

---

## 📚 Resources
1. [Web Server vs Application Server](https://www.nginx.com/resources/glossary/application-server-vs-web-server/)
2. [HAProxy Configuration Guide](https://www.haproxy.org/download/2.4/doc/configuration.txt)
3. [MySQL Replication](https://dev.mysql.com/doc/refman/8.0/en/replication.html)
4. [Let's Encrypt SSL](https://letsencrypt.org/getting-started/)

---

## 👨💻 Author  

- [Saynez667](https://github.com/Saynez667)