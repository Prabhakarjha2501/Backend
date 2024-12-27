
// Unit tests for: addcolor




const  = require('../../../src/controller/colorcontroller');
const colorService = require('../../../src/services/colorservice');


jest.mock("../../../src/services/colorservice");

describe('addcolor() addcolor method', () => {
    let req, res;

    beforeEach(() => {
        req = {
            body: {
                color: 'blue'
            }
        };
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };
    });

    // Happy Path Tests
    describe('Happy Path', () => {
        it('should successfully add a color and return status 201', async () => {
            // Arrange
            const newColor = { id: 1, color: 'blue' };
            colorService.createcolor.mockResolvedValue(newColor);

            // Act
            await addcolor(req, res);

            // Assert
            expect(colorService.createcolor).toHaveBeenCalledWith('blue');
            expect(res.status).toHaveBeenCalledWith(201);
            expect(res.json).toHaveBeenCalledWith({ newcolor: newColor });
        });
    });

    // Edge Case Tests
    describe('Edge Cases', () => {
        it('should handle error when colorService.createcolor throws an error', async () => {
            // Arrange
            const errorMessage = 'Database error';
            colorService.createcolor.mockRejectedValue(new Error(errorMessage));

            // Act
            await addcolor(req, res);

            // Assert
            expect(colorService.createcolor).toHaveBeenCalledWith('blue');
            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({ error: errorMessage });
        });

        it('should handle missing color in request body', async () => {
            // Arrange
            req.body.color = undefined;

            // Act
            await addcolor(req, res);

            // Assert
            expect(colorService.createcolor).not.toHaveBeenCalled();
            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({ error: expect.any(String) });
        });

        it('should handle empty string as color in request body', async () => {
            // Arrange
            req.body.color = '';

            // Act
            await addcolor(req, res);

            // Assert
            expect(colorService.createcolor).toHaveBeenCalledWith('');
            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({ error: expect.any(String) });
        });
    });
});

// End of unit tests for: addcolor
