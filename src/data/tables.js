// Array of objects describing table structure
const tables = [
    {
        'name': 'users', 
        'label': 'Users', 
        'columnNames': ['user_id', 'email', 'screen_name', 'country_code'],
        'columnLabels': ['User ID', 'Email', 'Screen Name', 'Country Code'],
        'inputs': ['email', 'screen_name', 'country_code']
    },
    {
        'name': 'games',
        'label': 'Games',
        'columnNames': [
            'game_id', 'title', 'platform', 'genre', 'developer', 'publisher', 'release_date'
        ],
        'columnLabels': [
            'Game ID', 'Title', 'Platform', 'Genre', 'Developer', 'Publisher', 'Release Date' 
        ],
        'inputs': ['title', 'platform', 'genre', 'developer', 'publisher', 'release_date']
    },
    {
        'name': 'collections',
        'label': 'Collections',
        'columnNames': ['user_id', 'game_id'],
        'columnLabels': ['User ID', 'Game ID'],
        'inputs': ['user_id', 'game_id']
    },
    {
        'name': 'wishes',
        'label': 'Wishes',
        'columnNames': ['user_id', 'game_id'],
        'columnLabels': ['User ID', 'Game ID'],
        'inputs': ['user_id', 'game_id']
    },
    {
        'name': 'ratings',
        'label': 'Ratings',
        'columnNames': ['user_id', 'game_id', 'rating_value', 'rating_comment'],
        'columnLabels': ['User ID', 'Game ID', 'Rating', 'Comment'],
        'inputs': ['user_id', 'game_id']
    }
];

export default tables;