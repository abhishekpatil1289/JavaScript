const students = [
    {
      id: 101,
      name: "John Doe",
      scores: {
        math: 85,
        science: 92,
        english: 88,
      },
      activities: ["basketball", "chess", "debate"],
      address: {
        city: "New York",
        zip: "10001",
      },
    },
    {
      id: 102,
      name: "Jane Smith",
      scores: {
        math: 78,
        science: 89,
        english: 94,
      },
      activities: ["soccer", "music", "art"],
      address: {
        city: "San Francisco",
        zip: "94105",
      },
    },
    {
      id: 103,
      name: "Sam Wilson",
      scores: {
        math: 91,
        science: 84,
        english: 86,
      },
      activities: ["swimming", "robotics", "gaming"],
      address: {
        city: "Chicago",
        zip: "60601",
      },
    },
    {
      id: 104,
      name: "Emily Johnson",
      scores: {
        math: 87,
        science: 93,
        english: 90,
      },
      activities: ["running", "photography", "cooking"],
      address: {
        city: "Austin",
        zip: "73301",
      },
    },
    {
      id: 105,
      name: "Michael Brown",
      scores: {
        math: 82,
        science: 88,
        english: 85,
      },
      activities: ["tennis", "writing", "volunteering"],
      address: {
        city: "Los Angeles",
        zip: "90001",
      },
    },
  ];
  

  let highest = students[0].scores.math;
  let holder = 0;
  for (let a = 0; a < students.length; a++)
  {
    holder = students[a].scores.math;
    if(highest < holder)
    {
      highest = holder;
    }
  }

  console.log(highest)

  let highestScore = students.find((item)=>item.scores.math === highest)

  console.log(highestScore.name); 

  // step 1
  // let array = [];

  // let innetialvalue = 0;

  // students.forEach((item) => {
  //   const total = Object.values(item.scores).reduce((accumulator, currentValue) => {
  //     return accumulator + currentValue;
  //   }, innetialvalue); 
  
  //   array.push({ name: item.name, total: total });
  // });
  
  // console.log(array);
  