// Array of objects describing table structure
const tables = [
    {
        'name': 'users', 
        'label': 'Users', 
        'columnNames': ['user_id', 'email', 'screen_name', 'country_code'],
        'columnLabels': ["User Name", 'Email', 'Screen Name', 'Country Code']
    },
    {
        'name': 'games',
        'label': 'Games',
        'columnNames': [
            'game_id', 'title', 'platform', 'genre', 'developer', 'publisher', 'release_date'
        ],
        'columnLabels': [
            'Game ID', 'Title', 'Platform', 'Genre','Developer', 'Publisher', 'Release Date' 
        ]
    },
    {
        'name': 'collections',
        'label': 'Collections',
        'columnNames': ['user_id', 'game_id'],
        'columnLabels': ['User ID', 'Game ID']
    },
    {
        'name': 'wishes',
        'label': 'Wishes',
        'columnNames': ['user_id', 'game_id'],
        'columnLabels': ['User ID', 'Game ID']
    },
    {
        'name': 'ratings',
        'label': 'Ratings',
        'columnNames': ['user_id', 'game_id', 'rating_value', 'rating_comment'],
        'columnLabels': ['User ID', 'Game ID', 'Rating', 'Comment']
    }
];

export default tables;