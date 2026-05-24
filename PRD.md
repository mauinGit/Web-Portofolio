# PRD — Dynamic Portfolio Website with Admin Dashboard

## Project Name
Personal Portfolio Website with Admin CMS

---

# 1. Project Overview

Website portfolio pribadi berbasis modern web yang dibangun menggunakan Next.js dan Supabase. Sistem ini memungkinkan pemilik portfolio mengelola seluruh isi website melalui dashboard admin tanpa perlu mengubah kode secara manual.

Website akan menampilkan informasi personal, skill, project, pengalaman, prestasi, serta menyediakan fitur kontak langsung untuk kebutuhan bisnis, freelance, maupun networking profesional.

Sistem dirancang responsive untuk desktop, tablet, dan mobile phone agar memberikan pengalaman pengguna yang optimal di semua perangkat.

---

# 2. Background Problem

Portfolio website statis memiliki berbagai keterbatasan, seperti:

- Perubahan data harus dilakukan langsung melalui source code.
- Tidak efisien untuk menambah project atau memperbarui skill.
- Tidak memiliki dashboard pengelolaan konten.
- Sulit digunakan oleh non-technical user.
- Belum memiliki sistem komunikasi langsung dengan pengunjung.
- Belum mendukung pengelolaan image dan project secara dinamis.
- Tidak responsive secara optimal pada seluruh device.

Karena itu dibutuhkan sistem portfolio modern yang dinamis, scalable, dan mudah dikelola.

---

# 3. Proposed Solution

Membangun website portfolio dinamis menggunakan:

- Next.js sebagai frontend dan fullstack framework.
- Supabase sebagai backend service.
- Tailwind CSS untuk modern responsive UI.
- Supabase Auth untuk authentication admin.
- Supabase Storage untuk penyimpanan gambar.
- Gmail integration untuk contact form.

Website menyediakan:
- Admin dashboard.
- CRUD project.
- CRUD skill.
- CRUD experience.
- CRUD achievement.
- Dynamic hero section.
- Contact form integration.
- Responsive design mobile-first.
- Analytics sederhana.
- SEO optimization.

---

# 4. Project Goals

## Main Goals
- Mempermudah pengelolaan portfolio.
- Membuat website lebih profesional.
- Menampilkan project secara menarik.
- Meningkatkan branding personal.
- Menyediakan media komunikasi langsung.
- Mempermudah recruiter/client melihat pengalaman dan karya.

## Technical Goals
- Responsive di semua device.
- Fast loading.
- SEO friendly.
- Secure authentication.
- Easy maintenance.
- Scalable architecture.

---

# 5. Target Users

| User | Description |
|---|---|
| Admin | Pemilik portfolio |
| Recruiter | HR atau perusahaan |
| Client | Calon client freelance |
| Partner | Rekan kerja sama |
| Visitor | Pengunjung umum |

---

# 6. Tech Stack

| Technology | Function |
|---|---|
| Next.js | Frontend Framework |
| TypeScript | Programming Language |
| Tailwind CSS | Styling |
| shadcn/ui | UI Components |
| Supabase | Backend Service |
| Supabase Auth | Authentication |
| Supabase Storage | File Storage |
| PostgreSQL | Database |
| Framer Motion | Animation |
| Nodemailer / Resend | Email Service |
| Vercel | Deployment |

---

# 7. Main Features

# A. Landing Page

## Hero Section
Menampilkan:
- Foto profile.
- Nama lengkap.
- Deskripsi singkat.
- Social media link.
- CTA button.

### Admin Can:
- Change hero image.
- Update description.
- Update CTA button.
- Update social links.

---

# B. About Section

Menampilkan:
- Biodata singkat.
- Pendidikan.
- Deskripsi personal.

### Admin Can:
- Edit seluruh informasi.

---

# C. Skill Section

Menampilkan daftar skill dengan visual modern.

## Skill Information
- Skill name
- Icon
- Level
- Category

### Admin Can:
- Add skill
- Edit skill
- Delete skill

### Features
- Skill category filter.
- Responsive grid layout.

---

# D. Project Section

Menampilkan seluruh project portfolio.

## Project Information
- Title
- Description
- Thumbnail
- Tech stack
- GitHub URL
- Demo URL
- Status
- Featured project

### Admin Can
- Add project
- Edit project
- Delete project
- Upload thumbnail

### Additional Features
- Search project
- Filter technology
- Featured project
- Project detail page

---

# E. Project Detail Page

Setiap project memiliki halaman detail.

## Contents
- Project overview
- Problem statement
- Solution
- Tech stack
- Screenshot gallery
- Challenges
- Demo link
- GitHub repository

---

# F. Experience Section

Menampilkan:
- Organisasi
- Kepanitiaan
- Internship
- Volunteer

### Admin Can
- CRUD experience

---

# G. Achievement Section

Menampilkan:
- Competition achievements
- Certifications
- Awards

### Admin Can
- CRUD achievement

---

# H. Contact Section

Form komunikasi langsung.

## Fields
- Name
- Email
- Message

## Features
- Send email to Gmail.
- Anti spam protection.
- Success notification.

---

# I. Admin Dashboard

## Features
- Admin login
- Sidebar navigation
- Dashboard analytics
- CRUD management
- Image upload
- Toast notifications

---

# J. Analytics Dashboard

Menampilkan:
- Total visitors
- Total messages
- Total projects
- Most viewed project

---

# K. SEO Optimization

## Features
- Dynamic metadata
- Sitemap
- robots.txt
- OpenGraph
- Structured data

---

# L. Dark Mode

User dapat mengganti:
- Light mode
- Dark mode

---

# M. Responsive Design

Website wajib responsive pada:
- Mobile phone
- Tablet
- Laptop
- Desktop

## Responsive Requirements
- Mobile-first design
- Flexible layout
- Responsive navbar
- Adaptive image scaling
- Touch-friendly UI
- Responsive typography

---

# 8. Authentication System

## Admin Authentication
Menggunakan:
- Supabase Auth

## Security Features
- Protected route
- Session management
- Middleware protection
- Secure environment variable

---

# 9. Database Design

# Table: profiles

| Field | Type |
|---|---|
| id | uuid |
| hero_image | text |
| full_name | text |
| description | text |
| about | text |
| cv_url | text |

---

# Table: skills

| Field | Type |
|---|---|
| id | uuid |
| name | text |
| icon | text |
| level | text |
| category | text |

---

# Table: projects

| Field | Type |
|---|---|
| id | uuid |
| title | text |
| description | text |
| image | text |
| github_url | text |
| demo_url | text |
| status | text |
| is_featured | boolean |
| created_at | timestamp |

---

# Table: technologies

| Field | Type |
|---|---|
| id | uuid |
| name | text |

---

# Table: project_technologies

| Field | Type |
|---|---|
| id | uuid |
| project_id | uuid |
| technology_id | uuid |

---

# Table: experiences

| Field | Type |
|---|---|
| id | uuid |
| title | text |
| organization | text |
| description | text |
| start_date | date |
| end_date | date |

---

# Table: achievements

| Field | Type |
|---|---|
| id | uuid |
| title | text |
| description | text |
| year | integer |

---

# Table: contacts

| Field | Type |
|---|---|
| id | uuid |
| name | text |
| email | text |
| message | text |
| created_at | timestamp |

---

# 10. User Flow

# Visitor Flow

1. Open website.
2. View portfolio.
3. Explore projects.
4. View achievements.
5. Send contact message.

---

# Admin Flow

1. Login dashboard.
2. Manage content.
3. Upload images.
4. CRUD project/skill.
5. Monitor analytics.
6. Logout.

---

# 11. Non Functional Requirements

| Requirement | Description |
|---|---|
| Responsive | Mobile-friendly UI |
| Security | Secure authentication |
| Performance | Fast page loading |
| Scalability | Easy future development |
| Accessibility | Easy to use |
| SEO Friendly | Optimized for search engine |
| Maintainability | Structured clean code |

---

# 12. UI/UX Design Concept

## Design Style
- Modern
- Minimalist
- Clean
- Interactive

## UI Features
- Smooth animation
- Hover effect
- Responsive navbar
- Card-based layout
- Gradient accent
- Glassmorphism (optional)

---

# 13. Future Development

## Planned Features
- Blog system
- Multi-language
- AI chatbot
- Visitor analytics advanced
- Download CV
- WhatsApp integration
- Testimonials
- Admin role management
- CMS editor
- Newsletter system

---

# 14. Deployment

## Hosting
- Vercel

## Backend
- Supabase Cloud

## Domain
- Custom domain support

---

# 15. Project Architecture

Frontend:
- Next.js App Router
- TypeScript
- Tailwind CSS

Backend:
- Supabase Database
- Supabase Storage
- Supabase Auth

Deployment:
- Vercel

---

# 16. Expected Result

Hasil akhir berupa website portfolio profesional yang:
- Dinamis.
- Responsive.
- Modern.
- Mudah dikelola.
- SEO friendly.
- Mobile optimized.
- Memiliki dashboard admin lengkap.

Website dapat digunakan sebagai media personal branding, showcase project, dan komunikasi profesional.