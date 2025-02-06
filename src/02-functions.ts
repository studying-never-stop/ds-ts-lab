import {Friend, Colleague, EmailContact } from './myTypes'
import { friends, colleagues } from './01-basics'

function older(f: Friend) : string {
    f.age += 1
    return `${f.name} is now ${f.age}` 
}

console.log(older(friends[0]))

function allOlder(friends: Friend[]): string[] {
    return friends.map(friend => older(friend)); // 使用 map 调用 older 并收集返回值
}

console.log(allOlder(friends))

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]): Colleague {
    const result = cs.sort(
      (c1, c2) => c1.contact.extension - c2.contact.extension
    );
    return result[cs.length - 1];
  }
  console.log(highestExtension(colleagues.current));

  function addColleague(cs: Colleague[], name: string, department: string, email: string): void {
    const maxExtension = cs.length > 0 
      ? Math.max(...cs.map(c => c.contact.extension)) 
      : 100; // 如果数组为空，从 100 开始分配
    cs.push({
      name,
      department,
      contact: {
        email,
        extension: maxExtension + 1,
      },
    });
  }
  

  addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
  console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));
   
  function sortColleagues(
    colleagues: Colleague[],
    sorter: (c1: Colleague, c2: Colleague) => number,
    max? : number
  ): EmailContact[] {
    let end = colleagues.length;
    if (max !== undefined) {
       end = max < 2 ? 1 : max
    }
    const sorted = colleagues.sort(sorter);
    const fullResult =  sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
    return fullResult.slice(0,end)
  }
  // Test invocations
  console.log(sortColleagues(colleagues.current, (a, b) => (a.contact.extension - b.contact.extension),3));
  console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length),1));
  console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length))); // NEW

  function findFriends(friends: Friend[], predicate: (friend: Friend) => boolean): string[] {
    return friends.filter(predicate).map(f => f.name);
  }
  
  console.log(findFriends(friends, (friend) => friend.name.startsWith('Pa')));
  console.log(findFriends(friends, (friend) => friend.age < 35));

  function addInterest(friend: Friend, newInterest: string): string[] {
    if (!friend.interests) {
        // 如果 interests 未定义，则初始化为空数组
        friend.interests = [];
    }
    
    // 只有当新兴趣不存在时才添加，避免重复
    if (!friend.interests.includes(newInterest)) {
        friend.interests.push(newInterest);
    }

    return friend.interests;
}

// **2. 测试 `addInterest`**
console.log(addInterest(friends[1], 'Politics'));