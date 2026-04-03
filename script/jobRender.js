// jobRender.js
export async function renderJobs() {
  const jobsContainer = document.getElementById("jobsContainer");
  const positionSelect = document.getElementById("position");

  try {
    // Fetch the jobs JSON
    const response = await fetch("/json/jobs.json");
    if (!response.ok) throw new Error("Failed to load jobs.json");

    const jobs = await response.json();

    // Render job cards
    jobs.forEach((job) => {
      const jobCard = document.createElement("div");
      jobCard.classList.add("job-card");

      jobCard.innerHTML = `
        <h3>${job.title}</h3>
        <p><strong>Department:</strong> ${job.department}</p>
        <p><strong>Location:</strong> ${job.location}</p>
        <p><strong>Description:</strong> ${job.description}</p>
        <p><strong>Experience Required:</strong> ${job.experience}</p>
        <p><strong>Application Deadline:</strong> ${job.deadline}</p>
        <a href="#jobApplicationForm" class="apply-button">Apply Now</a>
      `;

      jobsContainer.appendChild(jobCard);

      // Populate the dropdown dynamically
      const option = document.createElement("option");
      option.value = job.title;
      option.textContent = job.title;
      positionSelect.appendChild(option);
    });
  } catch (error) {
    console.error("Error rendering jobs:", error);
    jobsContainer.innerHTML = `<p>Unable to load job vacancies at the moment. Please try again later.</p>`;
  }
}
