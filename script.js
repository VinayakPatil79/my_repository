document.addEventListener('DOMContentLoaded', () => {
    const processData = [
        {
            stage: {
                name: "Stage 0: Discovery",
                description: "Initial concept submission, opportunity identification, preliminary market size estimate.",
                riskMitigated: "Starting work on non-viable ideas.",
            },
            gate: {
                name: "Gate 1: Idea Screening",
                criteria: [
                    { type: "Must Meet", description: "Does the idea align with our strategic goals?" },
                    { type: "Should Meet", description: "Is there a potential market of significant size?" }
                ]
            }
        },
        {
            stage: {
                name: "Stage 1: Scoping",
                description: "Quick desk research, preliminary technical and manufacturing assessments, patent searches, SWOT analysis.",
                riskMitigated: "Technical and market infeasibility.",
            },
            gate: {
                name: "Gate 2: Second Screen",
                criteria: [
                    { type: "Must Meet", description: "Is the project technically feasible at a high level?" },
                    { type: "Must Meet", description: "Does the initial market assessment look positive?" },
                    { type: "Should Meet", description: "Scorecard rating on competitive intensity: 6/10 or better." }
                ]
            }
        },
        {
            stage: {
                name: "Stage 2: Build Business Case",
                description: "Detailed market study, Financial analysis (NPV, ROI, Payback), Risk analysis, full Product Definition, Preliminary Project Plan.",
                riskMitigated: "Investing heavily without a solid business and financial rationale.",
            },
            gate: {
                name: "Gate 3: Go to Development",
                criteria: [
                    { type: "Must Meet", description: "Is the financial analysis (NPV, ROI) acceptable?" },
                    { type: "Must Meet", description: "Is the business case signed off by key stakeholders?" },
                    { type: "Should Meet", description: "Is the project risk profile within acceptable limits?" }
                ]
            }
        },
        {
            stage: {
                name: "Stage 3: Development",
                description: "Detailed design, engineering work, prototype development, marketing plan finalization.",
                riskMitigated: "Design flaws and execution quality.",
            },
            gate: {
                name: "Gate 4: Go to Testing",
                criteria: [
                    { type: "Must Meet", description: "Is the prototype complete and meeting design specifications?" },
                    { type: "Should Meet", description: "Has the marketing plan been finalized?" }
                ]
            }
        },
        {
            stage: {
                name: "Stage 4: Testing & Validation",
                description: "In-house tests, field trials, customer validation, regulatory approval checks.",
                riskMitigated: "Launching a product that is not ready or does not meet customer needs/compliance.",
            },
            gate: {
                name: "Gate 5: Go to Launch",
                criteria: [
                    { type: "Must Meet", description: "Did the product pass all critical in-house and field tests?" },
                    { type: "Must Meet", description: "Has customer validation been positive?" },
                    { type: "Should Meet", description: "Are all regulatory approvals in place?" }
                ]
            }
        },
        {
            stage: {
                name: "Stage 5: Launch",
                description: "Full production/service ramp-up, final marketing and distribution plans, post-launch monitoring plan.",
                riskMitigated: "Poor market entry or failed operational handover.",
            }
            // No gate after the final stage
        }
    ];

    let currentStageIndex = 0;
    let projectStatus = 'active'; // active, killed, on-hold, completed

    const app = document.getElementById('app');
    const flowContainer = document.getElementById('process-flow');
    const statusDisplay = document.getElementById('project-status');

    function updateStatus(message, statusClass) {
        statusDisplay.textContent = `Current Status: ${message}`;
        statusDisplay.className = `status ${statusClass}`;
    }

    function handleDecision(decision) {
        if (projectStatus !== 'active') return;

        switch (decision) {
            case 'go':
                if (currentStageIndex < processData.length - 1) {
                    currentStageIndex++;
                    render();
                    const nextStageName = processData[currentStageIndex].stage.name.split(': ')[1];
                    updateStatus(`In ${nextStageName} Stage`, `status-go`);
                } else {
                    projectStatus = 'completed';
                    render();
                    updateStatus('Project Completed Successfully!', 'status-complete');
                }
                break;
            case 'kill':
                projectStatus = 'killed';
                render();
                updateStatus('Project Killed', 'status-kill');
                break;
            case 'hold':
                projectStatus = 'on-hold';
                render();
                updateStatus('Project On Hold', 'status-hold');
                break;
            case 'recycle':
                // For this simulation, recycle will just put it on hold.
                // A more complex implementation could send it back a stage.
                projectStatus = 'on-hold';
                render();
                updateStatus('Project Recycled (On Hold for rework)', 'status-recycle');
                break;
        }
    }

    function createGateElement(gateData, stageIndex) {
        const isGateActive = (stageIndex === currentStageIndex) && projectStatus === 'active';
        const gateDiv = document.createElement('div');
        gateDiv.className = 'gate';
        gateDiv.innerHTML = `<h2>${gateData.name}</h2>`;

        const criteriaTable = document.createElement('table');
        criteriaTable.innerHTML = `
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Criteria for Decision</th>
                </tr>
            </thead>
            <tbody>
                ${gateData.criteria.map(c => `<tr><td><strong>${c.type}</strong></td><td>${c.description}</td></tr>`).join('')}
            </tbody>
        `;
        gateDiv.appendChild(criteriaTable);

        if (isGateActive) {
            const decisionDiv = document.createElement('div');
            decisionDiv.className = 'gate-decision';
            decisionDiv.innerHTML = `
                <p><strong>Make a Decision:</strong></p>
                <button id="gate-${stageIndex}-go" class="go-btn">Go</button>
                <button id="gate-${stageIndex}-kill" class="kill-btn">Kill</button>
                <button id="gate-${stageIndex}-hold" class="hold-btn">Hold</button>
                <button id="gate-${stageIndex}-recycle" class="recycle-btn">Recycle</button>
            `;
            decisionDiv.querySelector(`#gate-${stageIndex}-go`).addEventListener('click', () => handleDecision('go'));
            decisionDiv.querySelector(`#gate-${stageIndex}-kill`).addEventListener('click', () => handleDecision('kill'));
            decisionDiv.querySelector(`#gate-${stageIndex}-hold`).addEventListener('click', () => handleDecision('hold'));
            decisionDiv.querySelector(`#gate-${stageIndex}-recycle`).addEventListener('click', () => handleDecision('recycle'));
            gateDiv.appendChild(decisionDiv);
        } else if (projectStatus === 'killed' || projectStatus === 'on-hold') {
             gateDiv.style.opacity = '0.5';
        }


        return gateDiv;
    }

    function createStageElement(stageData, stageIndex) {
        const stageDiv = document.createElement('div');
        stageDiv.className = 'stage';
        stageDiv.innerHTML = `
            <h2>${stageData.name}</h2>
            <p><strong>Focus:</strong> ${stageData.description}</p>
            <p><strong>Risk Mitigated:</strong> ${stageData.riskMitigated}</p>
        `;

        if (stageIndex > currentStageIndex || projectStatus !== 'active') {
            stageDiv.style.opacity = '0.5';
        }

        return stageDiv;
    }

    function render() {
        flowContainer.innerHTML = ''; // Clear previous content

        processData.forEach((item, index) => {
            // Only render up to the current stage or if the project is finished/killed
            if (index <= currentStageIndex || projectStatus !== 'active') {
                const stageEl = createStageElement(item.stage, index);
                flowContainer.appendChild(stageEl);

                // If there's a gate for this stage, render it
                if (item.gate) {
                    const gateEl = createGateElement(item.gate, index);
                    flowContainer.appendChild(gateEl);
                }
            }
        });

        if (projectStatus === 'completed') {
            const finalDiv = document.createElement('div');
            finalDiv.className = 'status status-final';
            finalDiv.innerHTML = '<h2>🎉 Project Successfully Launched! 🎉</h2>';
            flowContainer.appendChild(finalDiv);
        }
    }

    // Initial Render
    updateStatus("In Discovery Stage", "status-discovery");
    render();
});