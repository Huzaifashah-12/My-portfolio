import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [CommonModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css'
})
export class Portfolio {
  selectedProject: string | null = null;

  selectedProjectData:
    | {
        title: string;
        description: string;
        video: string;
        link: string;
      }
    | null = null;

  openProject(project: string) {
    const projectData: any = {
      shilajit: {
        title: 'Himalayan Shilajit',
        description:
          'A full-featured e-commerce website for Himalayan Shilajit built with Angular and Node.js. Includes secure authentication, product management, responsive design, and seamless shopping experience.',
        video: 'https://res.cloudinary.com/dpgngxotz/video/upload/v1760342995/HimalayanShilajit_-_Google_Chrome_2025-10-11_12-23-00_yesgd9.mp4',
        link: '',
      },
      services: {
        title: 'Services Providing Website',
        description:
          'A modern animated Angular website for showcasing professional services with advanced animations, clean UI, and responsive design for digital agencies and service providers.',
        video: 'https://res.cloudinary.com/dpgngxotz/video/upload/v1760342829/Home_-_Google_Chrome_2025-09-29_17-03-18_ptjmbh.mp4',
        link: '',
      },
      store: {
        title: 'E-Commerce Store',
        description:
          'A scalable Angular + Node.js + MongoDB store. Includes Google OAuth, JWT authentication, password hashing, CRUD operations, and product management with image upload and API integration.',
        video: 'https://res.cloudinary.com/dpgngxotz/video/upload/v1760342823/Project_-_Google_Chrome_2025-09-03_12-34-34_ddeqpp.mp4',
        link: '',
      },
      bugfixer: {
        title: 'Bug Fixer Tool (DeepSeek Integration)',
        description:
          'An AI-powered debugging tool built using Angular and Node.js, integrated with the DeepSeek API to identify, explain, and automatically fix code bugs in real time for developers.',
        video: 'https://res.cloudinary.com/dpgngxotz/video/upload/v1760342855/BugFixer_-_Google_Chrome_2025-08-26_17-01-51_y8etst.mp4',
        link: '',
      },
    };

    this.selectedProjectData = projectData[project];
    this.selectedProject = project;
  }

  closeProject() {
    this.selectedProject = null;
    this.selectedProjectData = null;
  }

  currentYear = new Date().getFullYear();
}