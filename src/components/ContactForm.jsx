import React, { useState } from 'react';
import { Mail, Phone, Send } from 'lucide-react';
import {
  Box,
  Typography,
  Paper,
  Grid,
  TextField,
  InputAdornment,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  CircularProgress,
  Alert,
  AlertTitle,
  Link,
  useTheme
} from '@mui/material';
import { sendContactForm } from '../services/productServices' 

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    device: '',
    issue: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('idle');
  const [error, setError] = useState(null);
  const theme = useTheme();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    setError(null);
    
    try {
      await sendContactForm(formData);
      setFormStatus('success');
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormStatus('idle');
        setFormData({
          name: '',
          email: '',
          phone: '',
          device: '',
          issue: '',
          message: ''
        });
      }, 3000);
    } catch (err) {
      setFormStatus('error');
      setError(err.response?.data?.message || 'Error al enviar el mensaje');
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 4 }}>
      <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
        Contacta con nosotros
      </Typography>

      {formStatus === 'success' ? (
        <Alert
          severity="success"
          sx={{ mb: 3, animation: 'fadeIn 0.5s ease-in-out' }}
        >
          <AlertTitle>Mensaje enviado correctamente</AlertTitle>
          Nos pondremos en contacto contigo lo antes posible. ¡Gracias por contactar con TEC Movil!
        </Alert>
      ) : formStatus === 'error' ? (
        <Alert
          severity="error"
          sx={{ mb: 3, animation: 'fadeIn 0.5s ease-in-out' }}
        >
          <AlertTitle>Error al enviar el mensaje</AlertTitle>
          {error || 'Por favor, inténtalo de nuevo más tarde.'}
        </Alert>
      ) : (
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                label="Nombre completo"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                variant="outlined"
                placeholder="Tu nombre"
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                label="Email"
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                variant="outlined"
                placeholder="tucorreo@ejemplo.com"
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                label="Teléfono"
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
                variant="outlined"
                placeholder="600 000 000"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Phone size={20} color={theme.palette.text.secondary} />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <FormControl fullWidth>
                <InputLabel id="device-label">Dispositivo</InputLabel>
                <Select
                  labelId="device-label"
                  id="device"
                  name="device"
                  value={formData.device}
                  onChange={handleChange}
                  label="Dispositivo"
                >
                  <MenuItem value=""><em>Selecciona tu dispositivo</em></MenuItem>
                  <MenuItem value="iphone">iPhone</MenuItem>
                  <MenuItem value="samsung">Samsung</MenuItem>
                  <MenuItem value="xiaomi">Xiaomi</MenuItem>
                  <MenuItem value="huawei">Huawei</MenuItem>
                  <MenuItem value="oppo">Oppo</MenuItem>
                  <MenuItem value="otro">Otro</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid size={{ xs: 12 }}>
              <FormControl fullWidth>
                <InputLabel id="issue-label">Tipo de problema</InputLabel>
                <Select
                  labelId="issue-label"
                  id="issue"
                  name="issue"
                  value={formData.issue}
                  onChange={handleChange}
                  label="Tipo de problema"
                >
                  <MenuItem value=""><em>Selecciona el problema</em></MenuItem>
                  <MenuItem value="pantalla">Pantalla rota</MenuItem>
                  <MenuItem value="bateria">Batería</MenuItem>
                  <MenuItem value="carga">Problemas de carga</MenuItem>
                  <MenuItem value="camara">Cámara</MenuItem>
                  <MenuItem value="software">Problema de software</MenuItem>
                  <MenuItem value="otro">Otro</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid size={{ xs: 12 }}>
              <TextField
                fullWidth
                label="Mensaje"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                multiline
                rows={4}
                variant="outlined"
                placeholder="Describe tu problema o consulta"
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                size="large"
                disabled={formStatus === 'submitting'}
                startIcon={
                  formStatus === 'submitting' ? (
                    <CircularProgress size={20} color="inherit" />
                  ) : (
                    <Send size={20} />
                  )
                }
                sx={{ py: 1.5 }}
              >
                {formStatus === 'submitting' ? 'Enviando...' : 'Enviar mensaje'}
              </Button>
            </Grid>

            <Grid size={{ xs: 12 }}>
              <Typography variant="body2" color="text.secondary" align="center">
                O contáctanos directamente
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, mt: 1 }}>
                <Link
                  href="tel:(3757)460569"
                  color="primary"
                  underline="hover"
                  sx={{ display: 'flex', alignItems: 'center' }}
                >
                  <Phone size={16} style={{ marginRight: theme.spacing(0.5) }} />
                  (3757)460569
                </Link>
                <Link
                  href="mailto:info@tecmovil.com"
                  color="primary"
                  underline="hover"
                  sx={{ display: 'flex', alignItems: 'center' }}
                >
                  <Mail size={16} style={{ marginRight: theme.spacing(0.5) }} />
                  Nor-cell@hotmail.com
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Box>
      )}
    </Paper>
  );
};

export default ContactForm;