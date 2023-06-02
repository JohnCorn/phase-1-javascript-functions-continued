function saturdayFun(activity)
{
       if (activity == null)
       {
        return "This Saturday, I want to roller-skate!";
       }
       else
       {
        return `This Saturday, I want to ${activity}!`;
       }
}

function mondayWork(activity)
{
    if (activity == null)
    {
     return "This Monday, I will go to the office.";
    }
    else
    {
     return `This Monday, I will ${activity}.`;
    }
}

function wrapAdjective(special) 
{
    const part1 = "You are";
    let adjective = "";

    return function () 
    {
        if (special == '*')
        {
            adjective = "a hard worker";
        }
        else if (special == '||')
        {
            adjective = "a dedicated programmer";
        }

        return (`${part1} ${special}${adjective}${special}!`);
    };
  }