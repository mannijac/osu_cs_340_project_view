// Array of objects describing table structure
const tables = [
    {
        'name': 'users', 
        'label': 'Users',
        'description': 'User list', 
        'columnNames': ['user_id', 'email', 'screen_name', 'country_code'],
        'columnLabels': ['User ID', 'Email', 'Screen Name', 'Country Code'],
        'inputs': ['email', 'screen_name', 'country_code']
    },
    {
        'name': 'games',
        'label': 'Games',
        'description': 'Games list', 
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
        'description': "Games added to users' collections", 
        'columnNames': ['collection_id', 'user_id', 'game_id'],
        'columnLabels': ['Collection ID', 'User ID', 'Game ID'],
        'inputs': ['user_id', 'game_id']
    },
    {
        'name': 'wishes',
        'label': 'Wishes',
        'description': 'Games users wished for', 
        'columnNames': ['wish_id', 'user_id', 'game_id'],
        'columnLabels': ['Wish ID', 'User ID', 'Game ID'],
        'inputs': ['user_id', 'game_id']
    },
    {
        'name': 'ratings',
        'label': 'Ratings',
        'description': 'Game ratings given by users',
        'columnNames': ['rating_id', 'user_id', 'game_id', 'rating_value', 'rating_comment'],
        'columnLabels': ['Rating ID', 'User ID', 'Game ID', 'Rating', 'Comment'],
        'inputs': ['user_id', 'game_id', 'rating_value', 'rating_comment']
    }
];

export default tables;