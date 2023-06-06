// Task scheduling

const schedules = [{
    "id": "a",
    "dependencies": ["b", "c"]
  },
  {
    "id": "b",
    "dependencies": ["d"]
  },
  {
    "id": "c",
    "dependencies": ["e"]
  },
  {
    "id": "d",
    "dependencies": []
  },
  {
    "id": "e",
    "dependencies": ["f"]
  },
  {
    "id": "f",
    "dependencies": []
  }
]

function taskSchedule(schedules) {

    schedules.forEach((schedule) => {
      if (!schedule.isExecuted) {
        executeDependencies(schedule)
        console.log(schedule.id)
      }
  
    })
  
    function getIndex(id) {
      return schedules.findIndex((schedule) => schedule.id === id)
    }
  
    function executeDependencies(scheduleObj) {
  
      if (scheduleObj.dependencies.length === 0) {
        scheduleObj.isExecuted = true
        return;
      }
  
      scheduleObj.dependencies.forEach((dependency) => {
        const index = getIndex(dependency)
        executeDependencies(schedules[index])
        console.log(dependency)
      })
      
       scheduleObj.isExecuted = true
    }
  }

//   taskSchedule(schedules)

