import {Friend, Colleague } from './myTypes'
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
   