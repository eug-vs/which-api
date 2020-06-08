interface ImageData {
  url: string;
  votes: number;
}

interface User {
  name: string;
  avatarUrl: string;
}

export interface Poll {
  author: User;
  contents: {
    left: ImageData;
    right: ImageData;
  };
}

const defaultUser: User = {
  name: 'John Doe',
  avatarUrl: 'https://github.com/eug-vs.png'
};


export class PollService {
  polls: Poll[] = [];

  async find () {
    return this.polls;
  }

  async create (data: Pick<Poll, 'contents'>) {
    const poll: Poll = { ...data, author: defaultUser };
    this.polls.push(poll);
    return poll;
  }
}

