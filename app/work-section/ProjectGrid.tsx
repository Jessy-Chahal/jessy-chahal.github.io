import React from 'react';

type JobType = {
  name: string;
  jobTitle: string;
  startDate: string;
  endDate?: string;
  description: string;
  logo: string;
};

const WorkExperience = ({ job }: { job: JobType }) => {
  return (
    <div className="flex flex-col md:flex-row items-start gap-x-6 gap-y-8 max-w-2xl mx-auto">
      <div className="min-h-[80px] min-w-[80px] p-2 rounded-md overflow-hidden bg-gray-200">
        {/* Add the logo or an icon for the job */}
        <img
          src={job.logo}
          alt={`${job.name} logo`}
          className="object-contain h-full w-full max-h-16 max-w-16"
        />
      </div>
      <div className="flex flex-col md:w-full">
        <h3 className="text-xl font-bold text-[#0E1016]">{job.name}</h3>
        <p className="text-[#0E1016]" >{job.jobTitle}</p>
        <time className="text-sm text-gray-500 mt-2 uppercase">
          {job.startDate} - {job.endDate ?? 'Present'}
        </time>
        {/* Limit the description height and add spacing */}
        <div className="text-gray-700 mt-3 mb-5 h-24 overflow-hidden">
          {job.description}
        </div>
      </div>
    </div>
  );
};


const ProjectGrid = () => {
  // Assuming job data is available here; you might fetch it from somewhere
  const jobData: JobType[] = [
    // Your job data objects here
    {
      // Example job data structure
      name: 'Freelancer',
      jobTitle: 'Software Engineer',
      startDate: 'Always',
      endDate: 'Avaliable',
      description: 'Offering expertise in software engineering, automation, and system enhancement. Proficient in Python scripting, AWS tools, and legacy system revamping.',
      logo: 'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL2pvYjk2OC1lbGVtZW50LTEyMS14LmpwZw.jpg', // Example logo image path
    },
    { 
      name: 'Intel Corporation',
      jobTitle: 'Software Engineer Intern / Part-time',
      startDate: 'January 2022',
      endDate: 'August 2023',
      description: 'Working as a software developer on SVT-AV1 project, utilizing state-of-the-art video coding techniques to provide high-quality and efficient video streaming for users worldwide.',
      logo: 'https://logodownload.org/wp-content/uploads/2014/04/intel-logo-1-1.png', // Example logo image path
    },
    {
      // Example job data structure
      name: 'Boeing Corporation',
      jobTitle: 'Software Engineer Intern',
      startDate: 'September 2023',
      endDate: 'Present',
      description: 'Working Full-stack and using agile methodologies to develop and maintain internal web applications for Boeing employees.',
      logo: 'https://www.pngplay.com/wp-content/uploads/3/Boeing-Logo-Background-PNG-Image.png', // Example logo image path
    },
    {
      // Example job data structure
      name: 'Microsoft Corporation',
      jobTitle: 'Technical Resilience Program',
      startDate: 'March 2021',
      endDate: 'April 2021',
      description: 'Developed technical skills and built resilience, preparing for the challenges and opportunities of a dynamic and rapidly-evolving tech landscape.',
      logo: 'https://th.bing.com/th/id/R.3d6a2ad56bc3403c5cfcc3efe09b741b?rik=gnNKMMZSvZ3uMA&riu=http%3a%2f%2fpurepng.com%2fpublic%2fuploads%2flarge%2fpurepng.com-microsoft-logo-iconlogobrand-logoiconslogos-251519939091wmudn.png&ehk=1%2fl4i5MeDLTCpvZhUZlCefvhSzsGR16HIPqagpDxYDg%3d&risl=&pid=ImgRaw&r=0', // Example logo image path
    },
    // Add more job data as needed
  ];

  // Split the job data into two separate arrays to render in two columns
  const column1 = jobData.slice(0, jobData.length / 2);
  const column2 = jobData.slice(jobData.length / 2);

  return (
    <div className="flex justify-center py-8 md:py-12 lg:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-y-12 max-w-4xl mx-auto">
        <div>
          {column1.map((job, index) => (
            <WorkExperience key={index} job={job} />
          ))}
        </div>
        <div className="mt-8 md:mt-0 ml-0 md:ml-8">
          {column2.map((job, index) => (
            <WorkExperience key={index + column1.length} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectGrid;
