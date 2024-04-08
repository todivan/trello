import { changePosition, type SortableObject } from '../../../src/Utils/ChangePosition';

// Mock function for updateCollection
const mockUpdateCollection = jest.fn();

// Sample data for testing
const collectionOfObjects: SortableObject[] = [
    { id: 1, position: 1 },
    { id: 2, position: 2 },
    { id: 3, position: 3 }
];

describe('changePosition function', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    test('moves object up in collection', () => {
        changePosition(3, -1, collectionOfObjects, mockUpdateCollection);
        expect(mockUpdateCollection).toHaveBeenCalledWith([
            { id: 1, position: 1 },
            { id: 3, position: 2 },
            { id: 2, position: 3 }
        ]);
    });

    test('moves object down in collection', () => {
        changePosition(1, 1, collectionOfObjects, mockUpdateCollection);
        expect(mockUpdateCollection).toHaveBeenCalledWith([
            { id: 2, position: 1 },
            { id: 1, position: 2 },
            { id: 3, position: 3 }
        ]);
    });

    test('does not update collection if object not found', () => {
        changePosition(4, 1, collectionOfObjects, mockUpdateCollection);
        expect(mockUpdateCollection).not.toHaveBeenCalled();
    });

    test('does not update collection if new position is out of bounds', () => {
        changePosition(1, -2, collectionOfObjects, mockUpdateCollection);
        expect(mockUpdateCollection).not.toHaveBeenCalled();
    });
});
