import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface ProjectData {
  title: string;
  description: string;
  video: string;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class Portfolio {
  showExperienceLetter = false;

  currentYear = new Date().getFullYear();

  // 🔗 Editable website links
  projectLinks = {
    shilajit: 'https://wholesalehimalayanshilajit.com/',
  };

  selectedProjectData: ProjectData | null = null;

  // 🎥 Video-only projects
  private projects: Record<string, ProjectData> = {
    services: {
      title: 'Services Providing Website',
      description:
        'A modern animated Angular website showcasing professional services with clean UI and smooth animations.',
      video:
        'https://res.cloudinary.com/dpgngxotz/video/upload/v1760342829/Home_-_Google_Chrome_2025-09-29_17-03-18_ptjmbh.mp4',
    },
    store: {
      title: 'E-Commerce Store',
      description:
        'Full-stack Angular + Node.js + MongoDB store with Google OAuth, JWT authentication, and CRUD operations.',
      video:
        'https://res.cloudinary.com/dpgngxotz/video/upload/v1760342823/Project_-_Google_Chrome_2025-09-03_12-34-34_ddeqpp.mp4',
    },
    bugfixer: {
      title: 'Bug Fixer Tool (DeepSeek Integration)',
      description:
        'AI-powered debugging tool using Angular and Node.js with DeepSeek API to analyze and fix bugs in real time.',
      video:
        'https://res.cloudinary.com/dpgngxotz/video/upload/v1760342855/BugFixer_-_Google_Chrome_2025-08-26_17-01-51_y8etst.mp4',
    },
  };

  // ▶ Open modal
  openProject(key: keyof typeof this.projects) {
    this.selectedProjectData = this.projects[key];
  }

  // ❌ Close modal
  closeProject() {
    this.selectedProjectData = null;
  }
}
