import React from 'react';
import StoryPreview from './StoryPreview';

import { List, Header } from 'semantic-ui-react';

class Stories extends React.Component {
    state = {
        stories: [],
    }

    async componentDidMount() {
        const stories = await this.props.getStories();
        this.setState({ stories });
    }

    render() {
        const { stories, contribution } = this.state;
        return (
            <div style={{ width: '60%', margin: '2em auto'}}>
                <Header size="huge">
                    Stories
                </Header>
                <List divided relaxed>
                    {
                        stories.map((story) => <StoryPreview key={story.id} story={story}/>)
                    }
                </List>
            </div>
        )
    }
}

export default Stories;